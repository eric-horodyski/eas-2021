"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tab1_agenda-item_agenda-item_module_ts"],{

/***/ 2583:
/*!**********************************************************************!*\
  !*** ./src/app/pages/tab1/agenda-item/agenda-item-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendaItemPageRoutingModule": () => (/* binding */ AgendaItemPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _agenda_item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agenda-item.page */ 4739);




const routes = [
    {
        path: '',
        component: _agenda_item_page__WEBPACK_IMPORTED_MODULE_0__.AgendaItemPage
    }
];
let AgendaItemPageRoutingModule = class AgendaItemPageRoutingModule {
};
AgendaItemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgendaItemPageRoutingModule);



/***/ }),

/***/ 3628:
/*!**************************************************************!*\
  !*** ./src/app/pages/tab1/agenda-item/agenda-item.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendaItemPageModule": () => (/* binding */ AgendaItemPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _agenda_item_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agenda-item-routing.module */ 2583);
/* harmony import */ var _components_agenda_avatars_agenda_avatars_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/agenda-avatars/agenda-avatars.module */ 151);
/* harmony import */ var _agenda_item_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agenda-item.page */ 4739);








let AgendaItemPageModule = class AgendaItemPageModule {
};
AgendaItemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _agenda_item_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgendaItemPageRoutingModule,
            _components_agenda_avatars_agenda_avatars_module__WEBPACK_IMPORTED_MODULE_1__.AgendaAvatarsComponentModule
        ],
        declarations: [_agenda_item_page__WEBPACK_IMPORTED_MODULE_2__.AgendaItemPage]
    })
], AgendaItemPageModule);



/***/ }),

/***/ 4739:
/*!************************************************************!*\
  !*** ./src/app/pages/tab1/agenda-item/agenda-item.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendaItemPage": () => (/* binding */ AgendaItemPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _agenda_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agenda-item.page.html?ngResource */ 9176);
/* harmony import */ var _agenda_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agenda-item.page.scss?ngResource */ 3486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_speaker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/speaker.service */ 4866);
/* harmony import */ var _services_agenda_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/agenda.service */ 3863);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/company.service */ 6196);
/* harmony import */ var src_app_services_talk_reminder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/talk-reminder.service */ 9746);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/browser */ 8313);











let AgendaItemPage = class AgendaItemPage {
    constructor(route, speakerService, agendaService, companyService, talkReminderService, toastController) {
        this.route = route;
        this.speakerService = speakerService;
        this.agendaService = agendaService;
        this.companyService = companyService;
        this.talkReminderService = talkReminderService;
        this.toastController = toastController;
        this.photoUrls = [];
        const agendaId = route.snapshot.paramMap.get('agendaId');
        this.agendaItem = agendaService.getAgendaItem(parseInt(agendaId, 10));
        this.speakers = speakerService.getSpeakers(this.agendaItem.speakerIds);
        this.photoUrls = this.speakers.map(speaker => speaker.photoUrl);
    }
    setReminder(agendaItem) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.talkReminderService.scheduleReminder(agendaItem);
            // set reminder for 5 minutes before!
            const toast = yield this.toastController.create({
                message: 'Reminder set for 5 minutes before the talk begins',
                duration: 2000,
                color: 'primary'
            });
            yield toast.present();
        });
    }
    triggerBrowser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_6__.Browser.open({ url: 'https://ionic.io/events/enterprise-app-summit-21' });
        });
    }
    formatTalkTime(agendaItem) {
        return this.agendaService.formatTalkTime(agendaItem);
    }
    getCompanyName(companyId) {
        return this.companyService.getCompany(companyId).name;
    }
};
AgendaItemPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _services_speaker_service__WEBPACK_IMPORTED_MODULE_2__.SpeakerService },
    { type: _services_agenda_service__WEBPACK_IMPORTED_MODULE_3__.AgendaService },
    { type: _services_company_service__WEBPACK_IMPORTED_MODULE_4__.CompanyService },
    { type: src_app_services_talk_reminder_service__WEBPACK_IMPORTED_MODULE_5__.TalkReminderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController }
];
AgendaItemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-agenda-item',
        template: _agenda_item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_agenda_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgendaItemPage);



/***/ }),

/***/ 9746:
/*!***************************************************!*\
  !*** ./src/app/services/talk-reminder.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TalkReminderService": () => (/* binding */ TalkReminderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



let TalkReminderService = class TalkReminderService {
    constructor(ngZone, router) {
        this.ngZone = ngZone;
        this.router = router;
        this.configure();
    }
    // Navigate the user to the talk they wanted to be reminded about
    configure() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    scheduleReminder(agendaItem) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            // Set reminder 5 minutes before the talk begins
            const timeSlice = agendaItem.startTime.substring(0, 5);
            const reminderDate = new Date(`December 8, 2021 ${timeSlice}:00`);
            reminderDate.setMinutes(reminderDate.getMinutes() - 5);
        });
    }
};
TalkReminderService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TalkReminderService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], TalkReminderService);



/***/ }),

/***/ 3486:
/*!*************************************************************************!*\
  !*** ./src/app/pages/tab1/agenda-item/agenda-item.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".header {\n  text-align: center;\n  margin: 20px 0;\n}\n\n.header .avatars {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 16px 0;\n}\n\napp-agenda-avatars {\n  --outline-color: var(--ion-color-light);\n}\n\n.header h1 {\n  font-size: 24px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: var(--ion-color-step-950);\n}\n\n.header h2 {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0;\n  color: var(--ion-color-step-650);\n}\n\nion-list.list-inset {\n  margin-top: 8px;\n}\n\n.description-list ion-item ion-text {\n  color: var(--ion-color-step-800);\n}\n\n.when-list ion-item ion-label {\n  font-weight: 600;\n}\n\n.when-list ion-item ion-note {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-step-650);\n}\n\nion-item.watch-live {\n  --color: var(--ion-color-primary);\n  --border-color: var(--ion-color-step-200);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW5kYS1pdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtCQUFBO0VBRUEsY0FBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7QUFKRjs7QUFPQTtFQUNFLHVDQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxpQkFBQTtFQUVBLGdDQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxTQUFBO0VBRUEsZ0NBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7QUFSRjs7QUFXQTtFQUNFLGdDQUFBO0FBUkY7O0FBV0E7RUFDRSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0NBQUE7QUFURjs7QUFZQTtFQUNFLGlDQUFBO0VBQ0EseUNBQUE7QUFURiIsImZpbGUiOiJhZ2VuZGEtaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwic2FzczptYXRoXCI7XG4kYWdlbmRhLW1hcmdpbjogMTZweDtcblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmhlYWRlciAuYXZhdGFycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIG1hcmdpbjogMCAwICN7JGFnZW5kYS1tYXJnaW59IDA7XG59XG5cbmFwcC1hZ2VuZGEtYXZhdGFycyB7XG4gIC0tb3V0bGluZS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLmhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICBtYXJnaW46IDAgMCAje21hdGguZGl2KCRhZ2VuZGEtbWFyZ2luLCAyKX0gMDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtOTUwKTtcbn1cblxuLmhlYWRlciBoMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICBtYXJnaW46IDA7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTY1MCk7XG59XG5cbmlvbi1saXN0Lmxpc3QtaW5zZXQge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5kZXNjcmlwdGlvbi1saXN0IGlvbi1pdGVtIGlvbi10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTgwMCk7XG59XG5cbi53aGVuLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLndoZW4tbGlzdCBpb24taXRlbSBpb24tbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjUwKTtcbn1cblxuaW9uLWl0ZW0ud2F0Y2gtbGl2ZSB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCk7XG59XG4iXX0= */";

/***/ }),

/***/ 9176:
/*!*************************************************************************!*\
  !*** ./src/app/pages/tab1/agenda-item/agenda-item.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\" text=\"Agenda\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-content\" [fullscreen]=\"true\">\n  <div class=\"header ion-padding\">\n\n    <div class=\"avatars\">\n      <app-agenda-avatars size=\"96px\" [urls]=\"photoUrls\"></app-agenda-avatars>\n    </div>\n\n    <h1>{{ agendaItem.title }}</h1>\n    <h2>\n      <div *ngFor=\"let speaker of speakers\">\n        {{ speaker.firstName }} {{ speaker.lastName }}, {{ speaker.role }}, {{ getCompanyName(speaker.companyId) }}\n      </div>\n    </h2>\n  </div>\n\n  <ion-list-header class=\"eas-header-small\">About this talk</ion-list-header>\n  <ion-list [inset]=\"true\" class=\"description-list\">\n    <ion-item lines=\"none\">\n      <ion-text class=\"ion-padding-top ion-padding-bottom\" [innerHtml]=\"agendaItem.description\"></ion-text>\n    </ion-item>\n  </ion-list>\n\n  <ion-list-header class=\"eas-header-small\">When</ion-list-header>\n  <ion-list [inset]=\"true\" class=\"when-list\">\n    <ion-item  lines=\"none\">\n      <ion-label>\n        Wednesday, December 8th<br />\n        <ion-note>{{ formatTalkTime(agendaItem) }}</ion-note>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list-header class=\"eas-header-small\">Watch</ion-list-header>\n  <ion-list [inset]=\"true\">\n    <ion-item [detail]=\"false\" lines=\"none\" class=\"watch-live\" (click)=\"triggerBrowser()\">\n      <ion-label>Watch live at ionic.io/events/enterprise-app-summit-21</ion-label>\n    </ion-item>\n    <ion-item (click)=\"setReminder(agendaItem)\" lines=\"none\">\n      <ion-label>Remind Me</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tab1_agenda-item_agenda-item_module_ts.js.map