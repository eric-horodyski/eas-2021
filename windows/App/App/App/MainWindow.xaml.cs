using Capacitor;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using System;
using System.Diagnostics;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace App {
    /// <summary>
    /// An empty window that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainWindow : Window {
        public CapacitorApp CapacitorAppInstance { get; set; }

        public MainWindow() {
            this.InitializeComponent();
            Title = "Capacitor Windows (WinUI3/WebView2)";

            CapacitorAppInstance = new CapacitorApp(this, CapacitorWebView);
            CapacitorAppInstance.LoadDefaultPlugins();
            CapacitorAppInstance.Load();
        }

        public async void HandleRedirect(Uri uri) {
            Debug.WriteLine($"Handling redirect: {uri.ToString()}");

            var js = $@"
var u = new URL('{uri.ToString()}');
if (u.searchParams.get('code')) {{
    window.IonicAuth.handleLoginCallback('{uri.ToString()}');
}} else {{
    window.IonicAuth.handleLogoutCallback();
}}
            ";

            this.CapacitorWebView.DispatcherQueue.TryEnqueue(() => {
                _ = this.CapacitorWebView.ExecuteScriptAsync(js);
            });
        }
    }
}
