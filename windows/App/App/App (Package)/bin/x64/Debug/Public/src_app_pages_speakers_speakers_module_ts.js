"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_speakers_speakers_module_ts"],{

/***/ 6422:
/*!*******************************************************************!*\
  !*** ./src/app/components/speaker-card/speaker-card.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerCardComponent": () => (/* binding */ SpeakerCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _speaker_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-card.component.html?ngResource */ 5585);
/* harmony import */ var _speaker_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speaker-card.component.scss?ngResource */ 2936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _speaker_view_speaker_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../speaker-view/speaker-view.component */ 9662);
/* harmony import */ var _services_speaker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/speaker.service */ 4866);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/company.service */ 6196);








let SpeakerCardComponent = class SpeakerCardComponent {
    constructor(speakerService, companyService, modalController) {
        this.speakerService = speakerService;
        this.companyService = companyService;
        this.modalController = modalController;
        this.button = false;
        this.safeArea = false;
    }
    ngOnInit() {
        this.speaker = this.speakerService.getSpeaker(this.id);
        this.company = this.companyService.getCompany(this.speaker.companyId);
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.button) {
                return;
            }
            const modal = yield this.modalController.create({
                component: _speaker_view_speaker_view_component__WEBPACK_IMPORTED_MODULE_2__.SpeakerViewComponent,
                componentProps: {
                    id: this.id
                }
            });
            modal.present();
        });
    }
};
SpeakerCardComponent.ctorParameters = () => [
    { type: _services_speaker_service__WEBPACK_IMPORTED_MODULE_3__.SpeakerService },
    { type: _services_company_service__WEBPACK_IMPORTED_MODULE_4__.CompanyService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
SpeakerCardComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    safeArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
SpeakerCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-speaker-card',
        template: _speaker_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_speaker_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SpeakerCardComponent);



/***/ }),

/***/ 3035:
/*!****************************************************************!*\
  !*** ./src/app/components/speaker-card/speaker-card.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerCardComponentModule": () => (/* binding */ SpeakerCardComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _speaker_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-card.component */ 6422);






let SpeakerCardComponentModule = class SpeakerCardComponentModule {
};
SpeakerCardComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_speaker_card_component__WEBPACK_IMPORTED_MODULE_0__.SpeakerCardComponent],
        exports: [_speaker_card_component__WEBPACK_IMPORTED_MODULE_0__.SpeakerCardComponent]
    })
], SpeakerCardComponentModule);



/***/ }),

/***/ 9662:
/*!*******************************************************************!*\
  !*** ./src/app/components/speaker-view/speaker-view.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerViewComponent": () => (/* binding */ SpeakerViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _speaker_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-view.component.html?ngResource */ 190);
/* harmony import */ var _speaker_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speaker-view.component.scss?ngResource */ 6529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_speaker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/speaker.service */ 4866);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/browser */ 8313);







let SpeakerViewComponent = class SpeakerViewComponent {
    constructor(speakerService, modalController) {
        this.speakerService = speakerService;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.speaker = this.speakerService.getSpeaker(this.id);
    }
    closeModal() {
        this.modalController.dismiss();
    }
    openLink(link) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__.Browser.open({ url: link });
        });
    }
};
SpeakerViewComponent.ctorParameters = () => [
    { type: _services_speaker_service__WEBPACK_IMPORTED_MODULE_2__.SpeakerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
SpeakerViewComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
SpeakerViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-speaker-view',
        template: _speaker_view_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_speaker_view_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SpeakerViewComponent);



/***/ }),

/***/ 8990:
/*!****************************************************************!*\
  !*** ./src/app/components/speaker-view/speaker-view.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerViewComponentModule": () => (/* binding */ SpeakerViewComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _speaker_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-view.component */ 9662);
/* harmony import */ var _speaker_card_speaker_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../speaker-card/speaker-card.module */ 3035);







let SpeakerViewComponentModule = class SpeakerViewComponentModule {
};
SpeakerViewComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _speaker_card_speaker_card_module__WEBPACK_IMPORTED_MODULE_1__.SpeakerCardComponentModule],
        declarations: [_speaker_view_component__WEBPACK_IMPORTED_MODULE_0__.SpeakerViewComponent],
        exports: [_speaker_view_component__WEBPACK_IMPORTED_MODULE_0__.SpeakerViewComponent]
    })
], SpeakerViewComponentModule);



/***/ }),

/***/ 7177:
/*!***********************************************************!*\
  !*** ./src/app/pages/speakers/speakers-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakersPageRoutingModule": () => (/* binding */ SpeakersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _speakers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speakers.page */ 7130);




const routes = [
    {
        path: '',
        component: _speakers_page__WEBPACK_IMPORTED_MODULE_0__.SpeakersPage
    }
];
let SpeakersPageRoutingModule = class SpeakersPageRoutingModule {
};
SpeakersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpeakersPageRoutingModule);



/***/ }),

/***/ 967:
/*!***************************************************!*\
  !*** ./src/app/pages/speakers/speakers.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakersPageModule": () => (/* binding */ SpeakersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _speakers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speakers-routing.module */ 7177);
/* harmony import */ var _speakers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speakers.page */ 7130);
/* harmony import */ var _components_speaker_card_speaker_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/speaker-card/speaker-card.module */ 3035);
/* harmony import */ var _components_speaker_view_speaker_view_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/speaker-view/speaker-view.module */ 8990);









let SpeakersPageModule = class SpeakersPageModule {
};
SpeakersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _speakers_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpeakersPageRoutingModule,
            _components_speaker_card_speaker_card_module__WEBPACK_IMPORTED_MODULE_2__.SpeakerCardComponentModule,
            _components_speaker_view_speaker_view_module__WEBPACK_IMPORTED_MODULE_3__.SpeakerViewComponentModule
        ],
        declarations: [_speakers_page__WEBPACK_IMPORTED_MODULE_1__.SpeakersPage]
    })
], SpeakersPageModule);



/***/ }),

/***/ 7130:
/*!*************************************************!*\
  !*** ./src/app/pages/speakers/speakers.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakersPage": () => (/* binding */ SpeakersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _speakers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speakers.page.html?ngResource */ 9274);
/* harmony import */ var _speakers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speakers.page.scss?ngResource */ 3731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_speaker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/speaker.service */ 4866);





let SpeakersPage = class SpeakersPage {
    constructor(speakerService) {
        this.speakerService = speakerService;
        this.speakers = [];
        this.speakers = speakerService.getSpeakers();
    }
    trackItems(index, itemObject) {
        return itemObject.id;
    }
};
SpeakersPage.ctorParameters = () => [
    { type: _services_speaker_service__WEBPACK_IMPORTED_MODULE_2__.SpeakerService }
];
SpeakersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-speakers',
        template: _speakers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_speakers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SpeakersPage);



/***/ }),

/***/ 2936:
/*!********************************************************************************!*\
  !*** ./src/app/components/speaker-card/speaker-card.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "ion-card.card-button {\n  border-radius: 16px;\n}\n\nion-card {\n  margin: 0;\n  border-radius: 0px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  box-shadow: none;\n  aspect-ratio: 1/1;\n}\n\n@supports not (aspect-ratio: 1/1) {\n  ion-card::before {\n    float: left;\n    padding-top: 100%;\n    content: \"\";\n  }\n  ion-card::after {\n    display: block;\n    content: \"\";\n    clear: both;\n  }\n}\n\nion-card-header {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);\n}\n\nion-card-title,\nion-card-subtitle {\n  color: white;\n}\n\nion-card-header ion-card-title {\n  margin: 0 0 6px 0;\n  font-size: 22px;\n}\n\nion-card-header ion-card-subtitle {\n  text-transform: none;\n  font-weight: 500;\n  font-size: 16px;\n}\n\nion-card-content {\n  height: calc(60px + var(--ion-safe-area-top));\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);\n}\n\nion-card-content img {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  height: 24px;\n}\n\nion-card.safe-area ion-card-content img {\n  top: max(var(--ion-safe-area-top), 16px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWFrZXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBRUEsa0JBQUE7RUFFQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0VBRkY7RUFLQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFFQSxXQUFBO0VBRUEsaUZBQUE7QUFORjs7QUFTQTs7RUFFRSxZQUFBO0FBTkY7O0FBU0E7RUFDRSxpQkFBQTtFQUVBLGVBQUE7QUFQRjs7QUFVQTtFQUNFLG9CQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0FBUkY7O0FBV0E7RUFDRSw2Q0FBQTtFQUVBLCtFQUFBO0FBVEY7O0FBWUE7RUFDRSxrQkFBQTtFQUVBLFNBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtBQVhGOztBQWNBO0VBQ0Usd0NBQUE7QUFYRiIsImZpbGUiOiJzcGVha2VyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC5jYXJkLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwO1xuXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcblxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG59XG5cbkBzdXBwb3J0cyBub3QgKGFzcGVjdC1yYXRpbzogMSAvIDEpIHtcbiAgaW9uLWNhcmQ6OmJlZm9yZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy10b3A6IDEwMCU7XG4gICAgY29udGVudDogJyc7XG4gIH1cblxuICBpb24tY2FyZDo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuXG4gIHdpZHRoOiAxMDAlO1xuXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC43KSAxMDAlKTtcbn1cblxuaW9uLWNhcmQtdGl0bGUsXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiAwIDAgNnB4IDA7XG5cbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtc3VidGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblxuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoNjBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG5cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcbn1cblxuaW9uLWNhcmQtY29udGVudCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAyMHB4O1xuXG4gIGhlaWdodDogMjRweDtcbn1cblxuaW9uLWNhcmQuc2FmZS1hcmVhIGlvbi1jYXJkLWNvbnRlbnQgaW1nIHtcbiAgdG9wOiBtYXgodmFyKC0taW9uLXNhZmUtYXJlYS10b3ApLCAxNnB4KTtcbn1cblxuIl19 */";

/***/ }),

/***/ 6529:
/*!********************************************************************************!*\
  !*** ./src/app/components/speaker-view/speaker-view.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "#close-button {\n  position: fixed;\n  top: max(var(--ion-safe-area-top), 16px);\n  right: 8px;\n}\n\nh2 {\n  margin-top: 0;\n}\n\nion-content {\n  --padding-bottom: var(--ion-safe-area-bottom);\n}\n\nion-text {\n  color: var(--ion-color-step-650);\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 24px;\n  white-space: pre-wrap;\n}\n\n.connect-button {\n  width: 80px;\n  height: 56px;\n  margin: 0 6px;\n  font-size: 14px;\n}\n\n.connect-button div {\n  color: var(--ion-color-primary);\n}\n\n.connect-button ion-icon {\n  height: 22px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWFrZXItdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFFQSx3Q0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLDZDQUFBO0FBQUY7O0FBR0E7RUFDRSxnQ0FBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGlCQUFBO0VBRUEscUJBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUVBLGVBQUE7QUFMRjs7QUFRQTtFQUNFLCtCQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUxGIiwiZmlsZSI6InNwZWFrZXItdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgdG9wOiBtYXgodmFyKC0taW9uLXNhZmUtYXJlYS10b3ApLCAxNnB4KTtcbiAgcmlnaHQ6IDhweDtcbn1cblxuaDIge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tKTtcbn1cblxuaW9uLXRleHQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjUwKTtcblxuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4uY29ubmVjdC1idXR0b24ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA1NnB4O1xuXG4gIG1hcmdpbjogMCA2cHg7XG5cbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29ubmVjdC1idXR0b24gZGl2IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmNvbm5lY3QtYnV0dG9uIGlvbi1pY29uIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 3731:
/*!**************************************************************!*\
  !*** ./src/app/pages/speakers/speakers.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGVha2Vycy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5585:
/*!********************************************************************************!*\
  !*** ./src/app/components/speaker-card/speaker-card.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card\n  [ngClass]=\"{\n    'card-button': button,\n    'safe-area': safeArea\n  }\"\n  [button]=\"button\"\n  [style.backgroundImage]=\"'url(' + speaker.photoUrl + ')'\"\n  (click)=\"presentModal()\"\n>\n  <ion-card-header>\n    <ion-card-title>{{ speaker.firstName }} {{ speaker.lastName }}</ion-card-title>\n    <ion-card-subtitle>{{ speaker.role }}, {{ company.name }}</ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>\n    <img [src]=\"company.logoUrl\" />\n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 190:
/*!********************************************************************************!*\
  !*** ./src/app/components/speaker-view/speaker-view.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-buttons id=\"close-button\">\n    <ion-button color=\"dark\" (click)=\"closeModal()\">\n      <ion-icon name=\"close-circle\" size=\"large\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n\n  <app-speaker-card [safeArea]=\"true\" [id]=\"id\"></app-speaker-card>\n\n  <div class=\"ion-padding\">\n    <h2 class=\"eas-header-large\">About {{ speaker.firstName }}</h2>\n    <ion-text>{{ speaker.biography }}</ion-text><br /><br />\n\n    <h2 class=\"eas-header-large\">Connect with {{ speaker.firstName }}</h2>\n    <ion-button color=\"light\" class=\"connect-button\" (click)=\"openLink(speaker.linkedin)\" *ngIf=\"speaker.linkedin\">\n      <div>\n        <ion-icon name=\"logo-linkedin\"></ion-icon><br />\n        <ion-label>LinkedIn</ion-label>\n      </div>\n    </ion-button>\n\n    <ion-button color=\"light\" class=\"connect-button\" (click)=\"openLink(speaker.github)\" *ngIf=\"speaker.github\">\n      <div>\n        <ion-icon name=\"logo-github\"></ion-icon><br />\n        <ion-label>GitHub</ion-label>\n      </div>\n    </ion-button>\n\n    <ion-button color=\"light\" class=\"connect-button\" (click)=\"openLink(speaker.twitter)\" *ngIf=\"speaker.twitter\">\n      <div>\n        <ion-icon name=\"logo-twitter\" size=\"large\"></ion-icon><br />\n        <ion-label>Twitter</ion-label>\n      </div>\n    </ion-button>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 9274:
/*!**************************************************************!*\
  !*** ./src/app/pages/speakers/speakers.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Speakers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"page-content\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Speakers</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"ion-padding grid\">\n    <app-speaker-card\n      *ngFor=\"let item of speakers; trackBy: trackItems\"\n      [id]=\"item.id\"\n      [button]=\"true\"\n    ></app-speaker-card>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_speakers_speakers_module_ts.js.map