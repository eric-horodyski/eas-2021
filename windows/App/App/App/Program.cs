// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

using App;
using Microsoft.UI.Dispatching;
using Microsoft.Windows.AppLifecycle;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading;
using System.Threading.Tasks;
using Windows.ApplicationModel.Activation;
using Windows.Storage;

namespace App {
    // NOTE: We need to check for redirection as early as possible, and
    // before creating any windows. To do this, we must define this symbol
    // in the project build properties:
    // DISABLE_XAML_GENERATED_MAIN
    // ...and define a custom Program class with a Main method 

    public static class Program {
        // Replaces the standard App.g.i.cs.
        // Note: We can't declare Main to be async because in a WinUI app
        // this prevents Narrator from reading XAML elements.
        [STAThread]
        static void Main(string[] args) {
            WinRT.ComWrappersSupport.InitializeComWrappers();

            bool isRedirect = DecideRedirection();
            if (!isRedirect) {
                Microsoft.UI.Xaml.Application.Start((p) => {
                    var context = new DispatcherQueueSynchronizationContext(
                        DispatcherQueue.GetForCurrentThread());
                    SynchronizationContext.SetSynchronizationContext(context);
                    new App();
                });
            }
        }

        #region Report helpers

        private static void OnActivated(object sender, AppActivationArguments args) {
            ExtendedActivationKind kind = args.Kind;
            if (kind == ExtendedActivationKind.Protocol) {
                if (args.Data is IProtocolActivatedEventArgs protoArgs) {
                    if (App.Current is App thisApp && thisApp.AppWindow != null &&
                        thisApp.AppWindow is MainWindow thisWindow) {
                        thisWindow.HandleRedirect(protoArgs.Uri);
                    }

                }
            }
        }

        #endregion


        #region Redirection

        // Decide if we want to redirect the incoming activation to another instance.
        private static bool DecideRedirection() {
            bool isRedirect = false;

            // Find out what kind of activation this is.
            AppActivationArguments args = AppInstance.GetCurrent().GetActivatedEventArgs();
            ExtendedActivationKind kind = args.Kind;
            if (kind == ExtendedActivationKind.Launch) {
                // This is a launch activation.
                AppInstance keyInstance = AppInstance.FindOrRegisterForKey("main"); // file.Name);

                // If we successfully registered the file name, we must be the
                // only instance running that was activated for this file.
                if (keyInstance.IsCurrent) {
                    // Hook up the Activated event, to allow for this instance of the app
                    // getting reactivated as a result of multi-instance redirection.
                    keyInstance.Activated += OnActivated;
                }
            } else if (kind == ExtendedActivationKind.Protocol) {

                try {
                    // This is a file activation: here we'll get the file information,
                    // and register the file name as our instance key.
                    if (args.Data is IProtocolActivatedEventArgs protoArgs) {
                        var uri = protoArgs.Uri;
                        AppInstance keyInstance = AppInstance.FindOrRegisterForKey("main"); // file.Name);

                        // If we successfully registered the file name, we must be the
                        // only instance running that was activated for this file.
                        if (keyInstance.IsCurrent) {
                            // Report successful file name key registration.

                            // Hook up the Activated event, to allow for this instance of the app
                            // getting reactivated as a result of multi-instance redirection.
                            keyInstance.Activated += OnActivated;
                        } else {
                            isRedirect = true;
                            RedirectActivationTo(args, keyInstance);
                        }
                    }
                } catch (Exception ex) {
                    throw;
                }
            }

            return isRedirect;
        }

        private static IntPtr redirectEventHandle = IntPtr.Zero;

        // Do the redirection on another thread, and use a non-blocking
        // wait method to wait for the redirection to complete.
        public static void RedirectActivationTo(
            AppActivationArguments args, AppInstance keyInstance) {
            var redirectSemaphore = new Semaphore(0, 1);
            Task.Run(() => {
                keyInstance.RedirectActivationToAsync(args).AsTask().Wait();
                redirectSemaphore.Release();
            });
            redirectSemaphore.WaitOne();
        }

        #endregion

    }
}
