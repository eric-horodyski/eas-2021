"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sponsors_sponsors_module_ts"],{

/***/ 3021:
/*!*******************************************************************!*\
  !*** ./src/app/components/sponsor-card/sponsor-card.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorCardComponent": () => (/* binding */ SponsorCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sponsor_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sponsor-card.component.html?ngResource */ 1274);
/* harmony import */ var _sponsor_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sponsor-card.component.scss?ngResource */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_sponsor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sponsor.service */ 1420);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/browser */ 8313);







let SponsorCardComponent = class SponsorCardComponent {
    constructor(sponsorService, modalController) {
        this.sponsorService = sponsorService;
        this.modalController = modalController;
        this.button = false;
    }
    ngOnInit() {
        this.sponsor = this.sponsorService.getSponsor(this.id);
    }
    openLink(link) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__.Browser.open({ url: link });
        });
    }
};
SponsorCardComponent.ctorParameters = () => [
    { type: _services_sponsor_service__WEBPACK_IMPORTED_MODULE_2__.SponsorService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
SponsorCardComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
SponsorCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-sponsor-card',
        template: _sponsor_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sponsor_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SponsorCardComponent);



/***/ }),

/***/ 4168:
/*!****************************************************************!*\
  !*** ./src/app/components/sponsor-card/sponsor-card.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorCardComponentModule": () => (/* binding */ SponsorCardComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sponsor_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sponsor-card.component */ 3021);






let SponsorCardComponentModule = class SponsorCardComponentModule {
};
SponsorCardComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_sponsor_card_component__WEBPACK_IMPORTED_MODULE_0__.SponsorCardComponent],
        exports: [_sponsor_card_component__WEBPACK_IMPORTED_MODULE_0__.SponsorCardComponent]
    })
], SponsorCardComponentModule);



/***/ }),

/***/ 4369:
/*!*******************************************************************!*\
  !*** ./src/app/components/sponsor-view/sponsor-view.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorViewComponent": () => (/* binding */ SponsorViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sponsor_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sponsor-view.component.html?ngResource */ 9205);
/* harmony import */ var _sponsor_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sponsor-view.component.scss?ngResource */ 4070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_sponsor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sponsor.service */ 1420);






let SponsorViewComponent = class SponsorViewComponent {
    constructor(sponsorService, modalController) {
        this.sponsorService = sponsorService;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.sponsor = this.sponsorService.getSponsor(this.id);
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
SponsorViewComponent.ctorParameters = () => [
    { type: _services_sponsor_service__WEBPACK_IMPORTED_MODULE_2__.SponsorService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
SponsorViewComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
SponsorViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sponsor-view',
        template: _sponsor_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sponsor_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SponsorViewComponent);



/***/ }),

/***/ 2564:
/*!****************************************************************!*\
  !*** ./src/app/components/sponsor-view/sponsor-view.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorViewComponentModule": () => (/* binding */ SponsorViewComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sponsor_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sponsor-view.component */ 4369);
/* harmony import */ var _sponsor_card_sponsor_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sponsor-card/sponsor-card.module */ 4168);







let SponsorViewComponentModule = class SponsorViewComponentModule {
};
SponsorViewComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _sponsor_card_sponsor_card_module__WEBPACK_IMPORTED_MODULE_1__.SponsorCardComponentModule],
        declarations: [_sponsor_view_component__WEBPACK_IMPORTED_MODULE_0__.SponsorViewComponent],
        exports: [_sponsor_view_component__WEBPACK_IMPORTED_MODULE_0__.SponsorViewComponent]
    })
], SponsorViewComponentModule);



/***/ }),

/***/ 93:
/*!***********************************************************!*\
  !*** ./src/app/pages/sponsors/sponsors-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorsPageRoutingModule": () => (/* binding */ SponsorsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _sponsors_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sponsors.page */ 1040);




const routes = [
    {
        path: '',
        component: _sponsors_page__WEBPACK_IMPORTED_MODULE_0__.SponsorsPage
    }
];
let SponsorsPageRoutingModule = class SponsorsPageRoutingModule {
};
SponsorsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SponsorsPageRoutingModule);



/***/ }),

/***/ 9104:
/*!***************************************************!*\
  !*** ./src/app/pages/sponsors/sponsors.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorsPageModule": () => (/* binding */ SponsorsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sponsors_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sponsors-routing.module */ 93);
/* harmony import */ var _sponsors_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sponsors.page */ 1040);
/* harmony import */ var _components_sponsor_card_sponsor_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sponsor-card/sponsor-card.module */ 4168);
/* harmony import */ var _components_sponsor_view_sponsor_view_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/sponsor-view/sponsor-view.module */ 2564);









let SponsorsPageModule = class SponsorsPageModule {
};
SponsorsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _sponsors_routing_module__WEBPACK_IMPORTED_MODULE_0__.SponsorsPageRoutingModule,
            _components_sponsor_card_sponsor_card_module__WEBPACK_IMPORTED_MODULE_2__.SponsorCardComponentModule,
            _components_sponsor_view_sponsor_view_module__WEBPACK_IMPORTED_MODULE_3__.SponsorViewComponentModule
        ],
        declarations: [_sponsors_page__WEBPACK_IMPORTED_MODULE_1__.SponsorsPage]
    })
], SponsorsPageModule);



/***/ }),

/***/ 1040:
/*!*************************************************!*\
  !*** ./src/app/pages/sponsors/sponsors.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorsPage": () => (/* binding */ SponsorsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sponsors_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sponsors.page.html?ngResource */ 5556);
/* harmony import */ var _sponsors_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sponsors.page.scss?ngResource */ 3409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types */ 4984);
/* harmony import */ var _services_sponsor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sponsor.service */ 1420);






let SponsorsPage = class SponsorsPage {
    constructor(sponsorService) {
        this.sponsorService = sponsorService;
        this.platinumSponsors = [];
        this.goldSponsors = [];
        this.silverSponsors = [];
        this.bronzeSponsors = [];
        const sponsors = sponsorService.getSponsors();
        sponsors.forEach(sponsor => {
            switch (sponsor.tier) {
                case _types__WEBPACK_IMPORTED_MODULE_2__.SponsorTier.Platinum:
                    this.platinumSponsors = [
                        ...this.platinumSponsors,
                        sponsor
                    ];
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_2__.SponsorTier.Gold:
                    this.goldSponsors = [
                        ...this.goldSponsors,
                        sponsor
                    ];
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_2__.SponsorTier.Silver:
                    this.silverSponsors = [
                        ...this.silverSponsors,
                        sponsor
                    ];
                    break;
                case _types__WEBPACK_IMPORTED_MODULE_2__.SponsorTier.Bronze:
                    this.bronzeSponsors = [
                        ...this.bronzeSponsors,
                        sponsor
                    ];
                    break;
                default:
                    break;
            }
        });
    }
    ngOnInit() {
    }
};
SponsorsPage.ctorParameters = () => [
    { type: _services_sponsor_service__WEBPACK_IMPORTED_MODULE_3__.SponsorService }
];
SponsorsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sponsors',
        template: _sponsors_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sponsors_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SponsorsPage);



/***/ }),

/***/ 1420:
/*!*********************************************!*\
  !*** ./src/app/services/sponsor.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SponsorService": () => (/* binding */ SponsorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ 4984);



const LOREM_IPSUM = 'Details coming soon.';
let SponsorService = class SponsorService {
    constructor() {
        this.sponsors = [
            {
                id: 1,
                name: 'Modus',
                logoUrl: 'assets/logos/sponsor-modus.png',
                accentColor: '#ffffff',
                tier: _types__WEBPACK_IMPORTED_MODULE_0__.SponsorTier.Platinum,
                biography: LOREM_IPSUM,
                homepage: 'https://moduscreate.com/'
            },
            {
                id: 2,
                name: 'OpenForge',
                logoUrl: 'assets/logos/sponsor-openforge.png',
                accentColor: '#ffffff',
                tier: _types__WEBPACK_IMPORTED_MODULE_0__.SponsorTier.Platinum,
                biography: LOREM_IPSUM,
                homepage: 'https://openforge.io/'
            },
            {
                id: 3,
                name: 'auth0',
                logoUrl: 'assets/logos/sponsor-auth0.png',
                accentColor: '#000000',
                tier: _types__WEBPACK_IMPORTED_MODULE_0__.SponsorTier.Gold,
                biography: LOREM_IPSUM,
                homepage: 'https://auth0.com/'
            },
            {
                id: 4,
                name: 'Nrwl',
                logoUrl: 'assets/logos/sponsor-nrwl.png',
                accentColor: '#ffffff',
                tier: _types__WEBPACK_IMPORTED_MODULE_0__.SponsorTier.Gold,
                biography: LOREM_IPSUM,
                homepage: 'https://nrwl.io/'
            },
            {
                id: 5,
                name: 'CouchBase',
                logoUrl: 'assets/logos/sponsor-couchbase.png',
                accentColor: '#ed2226',
                tier: _types__WEBPACK_IMPORTED_MODULE_0__.SponsorTier.Gold,
                biography: LOREM_IPSUM,
                homepage: 'https://couchbase.com/'
            },
            {
                id: 6,
                name: 'LaunchPad Lab',
                logoUrl: 'assets/logos/sponsor-launchpad-lab.png',
                accentColor: '#ffffff',
                tier: _types__WEBPACK_IMPORTED_MODULE_0__.SponsorTier.Gold,
                biography: LOREM_IPSUM,
                homepage: 'https://launchpadlab.com/'
            },
            {
                id: 7,
                name: 'strapi',
                logoUrl: 'assets/logos/sponsor-strapi.png',
                accentColor: '#8e75ff',
                tier: _types__WEBPACK_IMPORTED_MODULE_0__.SponsorTier.Silver,
                biography: LOREM_IPSUM,
                homepage: 'https://strapi.io/'
            },
            {
                id: 8,
                name: 'Vue Mastery',
                logoUrl: 'assets/logos/sponsor-vue-mastery.png',
                accentColor: '#2c8097',
                tier: _types__WEBPACK_IMPORTED_MODULE_0__.SponsorTier.Bronze,
                biography: LOREM_IPSUM,
                homepage: 'https://vuemastery.com/'
            },
            {
                id: 9,
                name: 'Briebug',
                logoUrl: 'assets/logos/sponsor-briebug.png',
                accentColor: '#ffffff',
                tier: _types__WEBPACK_IMPORTED_MODULE_0__.SponsorTier.Silver,
                biography: LOREM_IPSUM,
                homepage: 'https://briebug.com/'
            },
            {
                id: 10,
                name: 'jnesis',
                logoUrl: 'assets/logos/sponsor-jnesis.png',
                accentColor: '#ffffff',
                tier: _types__WEBPACK_IMPORTED_MODULE_0__.SponsorTier.Silver,
                biography: LOREM_IPSUM,
                homepage: 'https://jnesis.com/'
            },
            {
                id: 11,
                name: 'Hybrid Mob',
                logoUrl: 'assets/logos/sponsor-hybridmob.png',
                accentColor: '#ffffff',
                tier: _types__WEBPACK_IMPORTED_MODULE_0__.SponsorTier.Silver,
                biography: LOREM_IPSUM,
                homepage: 'https://hybridmob.com/'
            },
            {
                id: 12,
                name: 'beNovelty',
                logoUrl: 'assets/logos/sponsor-benoveltylimited.png',
                accentColor: '#ffffff',
                tier: _types__WEBPACK_IMPORTED_MODULE_0__.SponsorTier.Silver,
                biography: LOREM_IPSUM,
                homepage: 'https://benovelty.com/'
            },
        ];
    }
    getSponsors() {
        return this.sponsors;
    }
    getSponsor(id) {
        return this.sponsors.find(sponsor => sponsor.id === id);
    }
};
SponsorService.ctorParameters = () => [];
SponsorService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], SponsorService);



/***/ }),

/***/ 4984:
/*!********************************!*\
  !*** ./src/app/types/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HubspotFormData": () => (/* binding */ HubspotFormData),
/* harmony export */   "SponsorTier": () => (/* binding */ SponsorTier)
/* harmony export */ });
var SponsorTier;
(function (SponsorTier) {
    SponsorTier["Platinum"] = "platinum";
    SponsorTier["Gold"] = "gold";
    SponsorTier["Silver"] = "silver";
    SponsorTier["Bronze"] = "bronze";
})(SponsorTier || (SponsorTier = {}));
class HubspotFormData {
}


/***/ }),

/***/ 7868:
/*!********************************************************************************!*\
  !*** ./src/app/components/sponsor-card/sponsor-card.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "ion-card.card-button {\n  border-radius: 16px;\n}\n\nion-card {\n  margin: 0;\n  border-radius: 0px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  box-shadow: none;\n  aspect-ratio: 1.5/1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@supports not (aspect-ratio: 1.5/1) {\n  ion-card::before {\n    float: left;\n    padding-top: 66.67%;\n    content: \"\";\n  }\n  ion-card::after {\n    display: block;\n    content: \"\";\n    clear: both;\n  }\n}\n\nion-card.card-button::part(native) {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb25zb3ItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBRUEsa0JBQUE7RUFFQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUFIRjtFQU1BO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VBSkY7QUFDRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxVQUFBO0FBTEYiLCJmaWxlIjoic3BvbnNvci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQuY2FyZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcblxuICBib3JkZXItcmFkaXVzOiAwcHg7XG5cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm94LXNoYWRvdzogbm9uZTtcblxuICBhc3BlY3QtcmF0aW86IDEuNSAvIDE7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBzdXBwb3J0cyBub3QgKGFzcGVjdC1yYXRpbzogMS41IC8gMSkge1xuICBpb24tY2FyZDo6YmVmb3JlIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nLXRvcDogNjYuNjclO1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG5cbiAgaW9uLWNhcmQ6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiAnJztcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuXG5pb24tY2FyZC5jYXJkLWJ1dHRvbjo6cGFydChuYXRpdmUpIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA2MCU7XG59XG4iXX0= */";

/***/ }),

/***/ 4070:
/*!********************************************************************************!*\
  !*** ./src/app/components/sponsor-view/sponsor-view.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "#close-button {\n  position: fixed;\n  top: max(var(--ion-safe-area-top), 16px);\n  right: 8px;\n}\n\nh2 {\n  margin-top: 0;\n}\n\nion-content {\n  --padding-bottom: var(--ion-safe-area-bottom);\n}\n\nion-text {\n  color: var(--ion-color-step-650);\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 24px;\n}\n\n.connect-button {\n  width: 80px;\n  height: 56px;\n  margin: 0 6px;\n  font-size: 14px;\n}\n\n.connect-button div {\n  color: var(--ion-color-primary);\n}\n\n.connect-button ion-icon {\n  height: 22px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb25zb3Itdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFFQSx3Q0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLDZDQUFBO0FBQUY7O0FBR0E7RUFDRSxnQ0FBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFFQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSwrQkFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFKRiIsImZpbGUiOiJzcG9uc29yLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuXG4gIHRvcDogbWF4KHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSwgMTZweCk7XG4gIHJpZ2h0OiA4cHg7XG59XG5cbmgyIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tc2FmZS1hcmVhLWJvdHRvbSk7XG59XG5cbmlvbi10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTY1MCk7XG5cbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uY29ubmVjdC1idXR0b24ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA1NnB4O1xuXG4gIG1hcmdpbjogMCA2cHg7XG5cbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29ubmVjdC1idXR0b24gZGl2IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmNvbm5lY3QtYnV0dG9uIGlvbi1pY29uIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 3409:
/*!**************************************************************!*\
  !*** ./src/app/pages/sponsors/sponsors.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcG9uc29ycy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1274:
/*!********************************************************************************!*\
  !*** ./src/app/components/sponsor-card/sponsor-card.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card\n  [ngClass]=\"{\n    'card-button': button\n  }\"\n  [button]=\"button\"\n  [style.--background]=\"sponsor.accentColor\"\n  (click)=\"openLink(sponsor.homepage)\"\n>\n  <img [src]=\"sponsor.logoUrl\" />\n</ion-card>\n";

/***/ }),

/***/ 9205:
/*!********************************************************************************!*\
  !*** ./src/app/components/sponsor-view/sponsor-view.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-buttons id=\"close-button\">\n    <ion-button color=\"dark\" (click)=\"closeModal()\">\n      <ion-icon name=\"close-circle\" size=\"large\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n\n  <app-sponsor-card [id]=\"id\"></app-sponsor-card>\n\n  <div class=\"ion-padding\">\n    <h2 class=\"eas-header-large\">About {{ sponsor.name }}</h2>\n    <ion-text>{{ sponsor.biography }}</ion-text><br /><br />\n\n    <!-- <h2 class=\"eas-header-large\">Connect with {{ sponsor.name }}</h2>\n    <ion-button color=\"light\" class=\"connect-button\">\n      <div>\n        <ion-icon name=\"logo-linkedin\"></ion-icon><br />\n        <ion-label>LinkedIn</ion-label>\n      </div>\n    </ion-button>\n\n    <ion-button color=\"light\" class=\"connect-button\">\n      <div>\n        <ion-icon name=\"logo-github\"></ion-icon><br />\n        <ion-label>GitHub</ion-label>\n      </div>\n    </ion-button>\n\n    <ion-button color=\"light\" class=\"connect-button\">\n      <div>\n        <ion-icon name=\"logo-twitter\" size=\"large\"></ion-icon><br />\n        <ion-label>Twitter</ion-label>\n      </div>\n    </ion-button> -->\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 5556:
/*!**************************************************************!*\
  !*** ./src/app/pages/sponsors/sponsors.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Sponsors</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"page-content\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Sponsors</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"ion-padding-top\">\n    <ion-list-header class=\"eas-header-large\">Platinum</ion-list-header>\n    <div class=\"ion-padding grid\">\n      <app-sponsor-card\n        *ngFor=\"let sponsor of platinumSponsors\"\n        [id]=\"sponsor.id\"\n        [button]=\"true\"\n      >\n      </app-sponsor-card>\n    </div>\n\n    <ion-list-header class=\"eas-header-large\">Gold</ion-list-header>\n    <div class=\"ion-padding grid\">\n      <app-sponsor-card\n        *ngFor=\"let sponsor of goldSponsors\"\n        [id]=\"sponsor.id\"\n        [button]=\"true\"\n      >\n      </app-sponsor-card>\n    </div>\n\n    <ion-list-header class=\"eas-header-large\">Silver</ion-list-header>\n    <div class=\"ion-padding grid\">\n      <app-sponsor-card\n        *ngFor=\"let sponsor of silverSponsors\"\n        [id]=\"sponsor.id\"\n        [button]=\"true\"\n      >\n      </app-sponsor-card>\n    </div>\n\n    <ion-list-header class=\"eas-header-large\">Bronze</ion-list-header>\n    <div class=\"ion-padding grid\">\n      <app-sponsor-card\n        *ngFor=\"let sponsor of bronzeSponsors\"\n        [id]=\"sponsor.id\"\n        [button]=\"true\"\n      >\n      </app-sponsor-card>\n    </div>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sponsors_sponsors_module_ts.js.map