"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_vault_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/vault.service */ 3843);






let LoginPage = class LoginPage {
    constructor(authenticationService, vaultService) {
        this.authenticationService = authenticationService;
        this.vaultService = vaultService;
        this.busy = false;
        this.showLogo = false;
        this.isDark = !window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    signIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.busy = true;
                yield this.authenticationService.login();
                setTimeout(() => {
                    // Timeout is used here because we may have logged in and are routing to the home page
                    this.busy = false;
                }, 1000);
            }
            catch (error) {
                this.busy = false;
                console.error('signIn', error);
            }
        });
    }
    signOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.busy = true;
                yield this.authenticationService.logout();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                this.busy = false;
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: src_app_services_vault_service__WEBPACK_IMPORTED_MODULE_3__.VaultService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-color-light);\n}\n\n.buttons {\n  margin-top: 5em;\n  height: 5em;\n}\n\n.frame {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n  overflow-y: hidden;\n}\n\nion-button {\n  min-width: 200px;\n  --border-radius: 30px;\n}\n\n.logo {\n  width: 30vw;\n  min-height: 120px;\n  max-width: 200px;\n}\n\n.show {\n  opacity: 1;\n  transition: opacity 1s;\n}\n\n.hide {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9DQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUdDO0VBQ0csVUFBQTtBQUFKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvc3BsYXNoLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5idXR0b25zIHtcbiAgICBtYXJnaW4tdG9wOjVlbTtcbiAgICBoZWlnaHQ6IDVlbTsgICAgXG59XG5cbi5mcmFtZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbmlvbi1idXR0b24ge1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4ubG9nbyB7XG4gICAgd2lkdGg6IDMwdnc7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLnNob3cge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbiB9XG4gXG4gLmhpZGUge1xuICAgIG9wYWNpdHk6IDA7XG4gfSJdfQ== */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n  <div class=\"frame\" [ngClass]=\"showLogo ? 'show' : 'hide'\">\n    <ion-img (ionImgDidLoad)=\"showLogo = true\" [src]=\"isDark ? 'assets/ionic-dark.svg' : 'assets/ionic.svg'\" class=\"logo\">\n    </ion-img>\n    <ion-text color=\"dark\">\n      <h2>Enterprise Summit</h2>\n      <h2>&nbsp;</h2>\n    </ion-text>\n\n    <div class=\"buttons\">\n      <ion-spinner [hidden]=\"!busy\" color=\"dark\" name=\"crescent\"></ion-spinner>\n      <ion-button [hidden]=\"busy || authenticated\" (click)=\"signIn()\" mode=\"ios\" color=\"dark\" fill=\"outline\"\n        size=\"large\">Sign In / Up</ion-button>\n      <ion-button [hidden]=\"busy || !authenticated\" (click)=\"signOut()\" mode=\"ios\" color=\"dark\" fill=\"outline\"\n        size=\"large\">Sign Out</ion-button>\n    </div>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map