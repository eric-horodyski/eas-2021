"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 1474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 8558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4629);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 7364);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 2581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_vault_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/vault.service */ 3843);
/* harmony import */ var _components_swag_modal_swag_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/swag-modal/swag-modal.page */ 3070);








let ProfilePage = class ProfilePage {
    constructor(modalController, authService, vaultService, routerOutlet, toastController) {
        this.modalController = modalController;
        this.authService = authService;
        this.vaultService = vaultService;
        this.routerOutlet = routerOutlet;
        this.toastController = toastController;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const token = yield this.authService.getAccessToken();
            console.log(this.authService.decodeToken(token));
        });
    }
    openSwagModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_swag_modal_swag_modal_page__WEBPACK_IMPORTED_MODULE_4__.SwagModalPage,
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl,
                componentProps: {}
            });
            modal.onDidDismiss().then((result) => {
                // Data will be undefined if modal was swiped closed or back button used
                if (result.data) {
                    this.presentToast();
                }
            });
            return yield modal.present();
        });
    }
    signOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authService.clearStorage();
            yield this.vaultService.clear();
            // Note: Logout will cause the app to reload so we cannot await logout!
            this.authService.logout();
        });
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Thanks! Winners will be notified by email.',
                duration: 2000,
                color: 'primary'
            });
            yield toast.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: src_app_services_vault_service__WEBPACK_IMPORTED_MODULE_3__.VaultService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-swag',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 2581:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "h2 {\n  margin: 0;\n}\n\nion-card {\n  border-radius: 16px;\n  background: var(--ion-background-color);\n  box-shadow: none;\n}\n\nion-card-title {\n  margin: 16px 0 8px 0;\n  text-transform: none;\n}\n\nion-card-subtitle {\n  text-transform: none;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--ion-color-step-650);\n}\n\nimg {\n  display: block;\n  margin: 0 auto;\n}\n\n.right {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsU0FBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7RUFFQSx1Q0FBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtFQUVBLG9CQUFBO0FBSkY7O0FBT0E7RUFDRSxvQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGdDQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtBQU5GIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcInNhc3M6bWF0aFwiO1xuJGNhcmQtbWFyZ2luOiAxNnB4O1xuXG5oMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBtYXJnaW46ICN7JGNhcmQtbWFyZ2lufSAwIG1hdGguZGl2KCRjYXJkLW1hcmdpbiwgMikgMDtcblxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblxuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTY1MCk7XG59XG5cbmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuIl19 */";

/***/ }),

/***/ 7364:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"page-content\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Profile</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list-header class=\"ion-padding-top ion-padding-start ion-padding-end eas-header-large\">Ionic Developer</ion-list-header>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title><strong>John Smith</strong></ion-card-title>\n      <ion-card-subtitle>You are part of the Ionic organization.</ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-button class=\"right\" (click)=\"signOut()\" fill=\"clear\" slot=\"end\">Sign Out</ion-button>    \n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map