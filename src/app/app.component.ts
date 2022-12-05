import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Platform } from '@ionic/angular';
import { VaultService } from './services/vault.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private vaultService: VaultService,
    private platform: Platform,
    private ngZone: NgZone) {
    this.initializeApp();
    platform.resume.subscribe(() => {
      console.log('PlatformResult.checkAuth', this.router.url);
      setTimeout(() => {
        this.checkAuth();
      }, 300); // This gives time for the vault to be locked because the vault uses lockAfterBackgrounded feature
    });
  }

  async initializeApp() {
  }

  private routeToLogin() {
    this.ngZone.run(() => {
      this.router.navigate(['login']);
    });
  }

  private async checkAuth() {
    if (window.location.hash.length > 0) {
      // When Auth Connect returns to the app it will load the app again
      // We want it to load without checking authentication so that it can
      // capture the token when auth-transition is routed to.
      console.log('checkAuth().window.location.hash.length', window.location.hash.length);
      return;
    }
    try {
      // This will trigger a check of the vault and ensure we are authenticated
      console.log('checkAuth().isAuthenticated()');
      const authenticated = await this.auth.isAuthenticated();
      if (!authenticated) {
        this.routeToLogin();
      }
    } catch (error) {
      if (error?.message?.includes('Not authenticated')) {
        this.auth.logout();
      } else {
        // Any failure we'll clear the vault and route to login
        await this.vaultService.clear();
        this.routeToLogin();
      }
    }
  }
}
