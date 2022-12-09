"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth-transition_auth-transition_module_ts"],{

/***/ 6766:
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth-transition/auth-transition-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthTransitionPageRoutingModule": () => (/* binding */ AuthTransitionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth_transition_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-transition.page */ 8046);




const routes = [
    {
        path: '',
        component: _auth_transition_page__WEBPACK_IMPORTED_MODULE_0__.AuthTransitionPage
    }
];
let AuthTransitionPageRoutingModule = class AuthTransitionPageRoutingModule {
};
AuthTransitionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthTransitionPageRoutingModule);



/***/ }),

/***/ 2790:
/*!*****************************************************************!*\
  !*** ./src/app/pages/auth-transition/auth-transition.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthTransitionPageModule": () => (/* binding */ AuthTransitionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _auth_transition_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-transition-routing.module */ 6766);
/* harmony import */ var _auth_transition_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-transition.page */ 8046);







let AuthTransitionPageModule = class AuthTransitionPageModule {
};
AuthTransitionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _auth_transition_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthTransitionPageRoutingModule
        ],
        declarations: [_auth_transition_page__WEBPACK_IMPORTED_MODULE_1__.AuthTransitionPage]
    })
], AuthTransitionPageModule);



/***/ }),

/***/ 8046:
/*!***************************************************************!*\
  !*** ./src/app/pages/auth-transition/auth-transition.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthTransitionPage": () => (/* binding */ AuthTransitionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _auth_transition_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-transition.page.html?ngResource */ 2374);
/* harmony import */ var _auth_transition_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-transition.page.scss?ngResource */ 756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/route.service */ 6770);






let AuthTransitionPage = class AuthTransitionPage {
    constructor(routeService, auth) {
        this.routeService = routeService;
        this.auth = auth;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Transitioning to logout or login
            if (window.location.hash === '#logout') {
                this.routeService.returnToLogin();
            }
            else {
                yield this.auth.handleLogin();
            }
        });
    }
};
AuthTransitionPage.ctorParameters = () => [
    { type: src_app_services_route_service__WEBPACK_IMPORTED_MODULE_3__.RouteService },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
AuthTransitionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-auth-transition',
        template: _auth_transition_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_auth_transition_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthTransitionPage);



/***/ }),

/***/ 756:
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth-transition/auth-transition.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-color-light);\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtdHJhbnNpdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiYXV0aC10cmFuc2l0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn0iXX0= */";

/***/ }),

/***/ 2374:
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth-transition/auth-transition.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n    <div class=\"center\">\n        <ion-spinner color=\"dark\" name=\"crescent\"></ion-spinner>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth-transition_auth-transition_module_ts.js.map