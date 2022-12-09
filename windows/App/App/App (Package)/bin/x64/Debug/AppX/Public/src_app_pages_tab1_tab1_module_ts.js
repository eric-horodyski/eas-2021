"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tab1_tab1_module_ts"],{

/***/ 9345:
/*!***********************************************************************!*\
  !*** ./src/app/components/agenda-avatars/agenda-avatars.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendaAvatarsComponent": () => (/* binding */ AgendaAvatarsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _agenda_avatars_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agenda-avatars.component.html?ngResource */ 2980);
/* harmony import */ var _agenda_avatars_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agenda-avatars.component.scss?ngResource */ 4941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let AgendaAvatarsComponent = class AgendaAvatarsComponent {
    constructor() {
        this.urls = [];
        this.size = '100%';
    }
    ngOnInit() { }
};
AgendaAvatarsComponent.ctorParameters = () => [];
AgendaAvatarsComponent.propDecorators = {
    urls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AgendaAvatarsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-agenda-avatars',
        template: _agenda_avatars_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_agenda_avatars_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgendaAvatarsComponent);



/***/ }),

/***/ 151:
/*!********************************************************************!*\
  !*** ./src/app/components/agenda-avatars/agenda-avatars.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendaAvatarsComponentModule": () => (/* binding */ AgendaAvatarsComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _agenda_avatars_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agenda-avatars.component */ 9345);






let AgendaAvatarsComponentModule = class AgendaAvatarsComponentModule {
};
AgendaAvatarsComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_agenda_avatars_component__WEBPACK_IMPORTED_MODULE_0__.AgendaAvatarsComponent],
        exports: [_agenda_avatars_component__WEBPACK_IMPORTED_MODULE_0__.AgendaAvatarsComponent]
    })
], AgendaAvatarsComponentModule);



/***/ }),

/***/ 1875:
/*!*****************************************************************!*\
  !*** ./src/app/components/agenda-card/agenda-card.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendaCardComponent": () => (/* binding */ AgendaCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _agenda_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agenda-card.component.html?ngResource */ 7154);
/* harmony import */ var _agenda_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agenda-card.component.scss?ngResource */ 8854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_agenda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/agenda.service */ 3863);
/* harmony import */ var _services_speaker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/speaker.service */ 4866);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/company.service */ 6196);








let AgendaCardComponent = class AgendaCardComponent {
    constructor(agendaService, speakerService, companyService, router) {
        this.agendaService = agendaService;
        this.speakerService = speakerService;
        this.companyService = companyService;
        this.router = router;
        this.photoUrls = [];
    }
    ngOnInit() {
        this.agenda = this.agendaService.getAgendaItem(this.id);
        this.speakers = this.speakerService.getSpeakers(this.agenda.speakerIds);
        this.photoUrls = this.speakers.map(speaker => speaker.photoUrl);
    }
    navigateToAgendaItemPage() {
        this.router.navigate([`/agenda/${this.id}`]);
    }
    getCompanyName(companyId) {
        return this.companyService.getCompany(companyId).name;
    }
    formatTalkTime(agendaItem) {
        return this.agendaService.formatTalkTime(agendaItem);
    }
};
AgendaCardComponent.ctorParameters = () => [
    { type: _services_agenda_service__WEBPACK_IMPORTED_MODULE_2__.AgendaService },
    { type: _services_speaker_service__WEBPACK_IMPORTED_MODULE_3__.SpeakerService },
    { type: _services_company_service__WEBPACK_IMPORTED_MODULE_4__.CompanyService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AgendaCardComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
AgendaCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-agenda-card',
        template: _agenda_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_agenda_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgendaCardComponent);



/***/ }),

/***/ 24:
/*!**************************************************************!*\
  !*** ./src/app/components/agenda-card/agenda-card.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendaCardComponentModule": () => (/* binding */ AgendaCardComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _agenda_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agenda-card.component */ 1875);
/* harmony import */ var _agenda_avatars_agenda_avatars_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../agenda-avatars/agenda-avatars.module */ 151);







let AgendaCardComponentModule = class AgendaCardComponentModule {
};
AgendaCardComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _agenda_avatars_agenda_avatars_module__WEBPACK_IMPORTED_MODULE_1__.AgendaAvatarsComponentModule],
        declarations: [_agenda_card_component__WEBPACK_IMPORTED_MODULE_0__.AgendaCardComponent],
        exports: [_agenda_card_component__WEBPACK_IMPORTED_MODULE_0__.AgendaCardComponent]
    })
], AgendaCardComponentModule);



/***/ }),

/***/ 8129:
/*!*****************************************************************************!*\
  !*** ./src/app/components/permissions-modal/permissions-modal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionsModalComponent": () => (/* binding */ PermissionsModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _permissions_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permissions-modal.component.html?ngResource */ 9904);
/* harmony import */ var _permissions_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions-modal.component.scss?ngResource */ 8847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_push_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/push-notification.service */ 6986);






let PermissionsModalComponent = class PermissionsModalComponent {
    constructor(modalController, pushService) {
        this.modalController = modalController;
        this.pushService = pushService;
    }
    ngOnInit() { }
    onContinue() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.closeModal();
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(null);
        });
    }
};
PermissionsModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_push_notification_service__WEBPACK_IMPORTED_MODULE_2__.PushNotificationService }
];
PermissionsModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-permissions-modal',
        template: _permissions_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_permissions_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PermissionsModalComponent);



/***/ }),

/***/ 8056:
/*!**************************************************************************!*\
  !*** ./src/app/components/permissions-modal/permissions-modal.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionsModalComponentModule": () => (/* binding */ PermissionsModalComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _permissions_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permissions-modal.component */ 8129);






let PermissionsModalComponentModule = class PermissionsModalComponentModule {
};
PermissionsModalComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_permissions_modal_component__WEBPACK_IMPORTED_MODULE_0__.PermissionsModalComponent],
        exports: [_permissions_modal_component__WEBPACK_IMPORTED_MODULE_0__.PermissionsModalComponent]
    })
], PermissionsModalComponentModule);



/***/ }),

/***/ 8203:
/*!***************************************************!*\
  !*** ./src/app/pages/tab1/tab1-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 4029);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    },
    {
        path: ':agendaId',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tab1_agenda-item_agenda-item_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./agenda-item/agenda-item.module */ 3628)).then(m => m.AgendaItemPageModule)
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 6789:
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 4029);
/* harmony import */ var _components_agenda_card_agenda_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/agenda-card/agenda-card.module */ 24);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 8203);
/* harmony import */ var src_app_components_permissions_modal_permissions_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/permissions-modal/permissions-modal.module */ 8056);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _components_agenda_card_agenda_card_module__WEBPACK_IMPORTED_MODULE_1__.AgendaCardComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule,
            src_app_components_permissions_modal_permissions_modal_module__WEBPACK_IMPORTED_MODULE_3__.PermissionsModalComponentModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 4029:
/*!*****************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 7374);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 3398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_agenda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/agenda.service */ 3863);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_components_permissions_modal_permissions_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/permissions-modal/permissions-modal.component */ 8129);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var src_app_services_push_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/push-notification.service */ 6986);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);










let Tab1Page = class Tab1Page {
    constructor(agendaService, modalController, pushNotificationService, storageService) {
        this.agendaService = agendaService;
        this.modalController = modalController;
        this.pushNotificationService = pushNotificationService;
        this.storageService = storageService;
        this.agenda = [];
        this.agenda = this.agendaService.getAgenda();
    }
    ngOnInit() {
        this.presentModal();
    }
    trackItems(index, itemObject) {
        return itemObject.id;
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // Call register every time the app launches
            // Show permission prompt the first time app is launched
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.getPlatform() !== 'web') {
                const permStatus = yield this.pushNotificationService.checkPermissionStatus();
                if (permStatus === 'granted') {
                    // On Android, permission is granted automatically
                    yield this.pushNotificationService.registerPush();
                }
                else if (permStatus === 'prompt' && !(yield this.storageService.getPushNotesModalShown())) {
                    // On iOS, ask the user for permission first. only once.
                    yield this.storageService.setPushNotesModalShown();
                    const modal = yield this.modalController.create({
                        component: src_app_components_permissions_modal_permissions_modal_component__WEBPACK_IMPORTED_MODULE_3__.PermissionsModalComponent,
                        initialBreakpoint: 1,
                        breakpoints: [0, 1],
                        cssClass: 'permissions-modal'
                    });
                    return yield modal.present();
                }
            }
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_agenda_service__WEBPACK_IMPORTED_MODULE_2__.AgendaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_services_push_notification_service__WEBPACK_IMPORTED_MODULE_5__.PushNotificationService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 3863:
/*!********************************************!*\
  !*** ./src/app/services/agenda.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendaService": () => (/* binding */ AgendaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let AgendaService = class AgendaService {
    constructor() {
        this.agenda = [
            {
                id: 1,
                title: 'The Future of Enterprise App Development',
                speakerIds: [1],
                startTime: '08:00 AM',
                endTime: '09:00 AM',
                description: 'The trends in enterprise app development are constantly evolving. Ionic works closely with enterprise engineering teams from around the world to shape the way we think about developing world-class applications.<p>Learn how Ionic layers enterprise offerings on top of an open source foundation. Max Lynch, CEO and co-founder at Ionic, will dive into the newest Ionic products and solutions, uncover some of the latest industry trends involving design systems, internet-of-things, and micro frontend technology, and share his vision for the future of app development.</p>'
            },
            {
                id: 2,
                title: 'The 80/20 Rule and Building UX Superpowers',
                speakerIds: [2],
                startTime: '09:00 AM',
                endTime: '10:00 AM',
                description: 'Software architecture describes the building blocks on which solutions are created. Done right, those building blocks can provide superpowers to your UX team. Tom will bring you end-to-end through a modern microservices architecture, and discuss the design that enables a modern user experience along with the technology and tools behind it. <p>Through a detailed breakdown of the client-side architecture and abstraction layers that provide clear separation of concerns and simplified unit testing, you’ll discover how US Foods delivers first-class web, mobile and tablet experiences.</p>'
            },
            {
                id: 3,
                title: 'Between Standard and Flexibility: Volkswagen Group’s Multi-Brand Design System GroupUI',
                speakerIds: [3, 27, 28, 24],
                startTime: '10:00 AM',
                endTime: '11:00 AM',
                description: 'Volkswagen Group’s full-stack design system GroupUI delivers a seamless experience from figma and sketch to web components built with Stencil JS—Ionic’s toolchain for building reusable, scalable design systems. In a multi-brand environment featuring over five brands—with more to come soon—a perfect collaboration between teams and brands is vital for success.<p>      Discover how the designers at Volkswagen add value with maximum flexibility for their brands. Learn how they are managing collaboration, communication, and contribution in their cross-brand and interdisciplinary environment.</p>'
            },
            {
                id: 4,
                title: 'Building Micro Frontends with StencilJS',
                speakerIds: [4],
                startTime: '11:00 AM',
                endTime: '11:30 AM',
                description: 'Managing the Front-End for large organizations can be a difficult task; the larger the application, the greater the need to divide it into smaller and more manageable, de-centralized artifacts in order to deliver a clean and consistent user experience.<p>In this talk we will explore multiple ways in which enterprises can leverage Micro-Front-end Architecture and Web Components compiled by Stencil JS in order to simplify the development, deployment, and consumption of third party content into large Front-End applications.</p>'
            },
            {
                id: 5,
                title: 'Speak Up: Employee Podcasting in the Age of Remote Work',
                speakerIds: [5, 6],
                startTime: '11:30 AM',
                endTime: '12:00 PM',
                description: 'T-Mobile Human Resources has a small software development team, but big ideas. They first developed a media CMS with a tube-experience, and now they\'re on to their next big project: a mobile podcasting app for employees! <p>Learn about the team’s planning process, why they chose to build with Ionic, the challenges they\'ve faced along the way, and why they would want to create such an app in the first place.</p>'
            },
            {
                id: 6,
                title: 'Fleet Management: Bringing Wireless Technology to Construction Equipment',
                speakerIds: [7, 22],
                startTime: '12:00 PM',
                endTime: '12:30 PM',
                description: 'Bobcat Machine IQ is a digital telematics system that helps Bobcat equipment owners access machine info in real time from any location or device. Owners can check the health, maintenance, security, and performance of each connected machine at any time. How did the engineers behind Machine IQ decide the best technology stack for their needs? <p>Learn how Doosan Bobcat integrated functionality like geofencing in their application, and how they incorporated Ionic Appflow into their CI/CD pipeline.</p>'
            },
            {
                id: 7,
                title: 'Leveraging Mono Repositories for Enterprise Projects',
                speakerIds: [11, 15, 16],
                startTime: '12:30 PM',
                endTime: '13:15 PM',
                description: 'We hear about it all the time: teams have built their applications as mono repositories and have had killer success across the board. Businesses benefit, technology benefits, performance improves—you name it and we\'ve seen it! However, you may think monrepos won\'t work for you. You already have your infrastructure set up, and it would be way too much effort for your product team to migrate over, right? Wrong. <p>If you are a software lead with an existing product looking to learn how to transform your product and your team to a monorepo, then this presentation is for you. OpenForge will present to you real strategies and exact implementations for converting your current team into a monorepo team.</p>'
            },
            {
                id: 14,
                title: 'Fireside Chat with Enterprise App Summit App Co-creator Matt Netkow',
                speakerIds: [20, 21],
                startTime: '13:15 PM',
                endTime: '13:30 PM',
                description: 'Learn more about the new Enterprise App Summit application co-created by Matt Netkow, Liam DeBeasi, and Ben Sperry.<p>Built with Ionic technology including Live Updates, Capacitor, and Ionic’s own UI framework (the upcoming Ionic 6!) this app is designed to be updated quickly to bring the latest information to event participants, and provide a seamless experience across any device.</p>'
            },
            {
                id: 8,
                title: 'Introducing Ionic 6: A Q&A with the Ionic Team',
                speakerIds: [25, 19],
                startTime: '13:30 PM',
                endTime: '14:30 PM',
                description: `We're excited to announce the release of Ionic 6! This release adds improved desktop support, overhauled components, iOS and Android design changes, and so much more. <p> Learn from Liam DeBeasi, Ionic's software developer and Ionic 6 project lead, as he dives into the decisions made to develop these features, specific framework version requirements, issues addressed with the new updates, and what's coming next after Ionic 6.</p>`
            },
            {
                id: 9,
                title: 'Choosing a Technology Strategy for the Future',
                speakerIds: [8, 9],
                startTime: '14:30 PM',
                endTime: '15:00 PM',
                description: 'Choosing a new technology framework for a global enterprise e-commerce solution can be difficult, especially when you need to sell the concept to internal stakeholders. Infrastructure, resource, support, and cost implications all come into play when making this crucial decision.<p>Learn how Norwex’s technical leaders chose Ionic’s solutions, leaned on Ionic’s world-class support and advisory team, and engaged with the Ionic community to quickly deliver their mission-critical applications to a global audience.</p>'
            },
            {
                id: 10,
                title: 'Accelerated Solution Delivery with Micro Frontends',
                speakerIds: [13],
                startTime: '15:00 PM',
                endTime: '15:30 PM',
                description: 'Discover how a micro-frontend architecture can accelerate multi-channel feature delivery with Ionic Hybrid, Portals, and Appflow. Robert Flagg, Engineering Director at Modus Create, will share how micro-frontends can impact cost, delivery cadence, and operational efficiencies.<p>You will also discover real examples of several enterprises that have achieved success with a micro-frontend architecture.</p>'
            },
            {
                id: 11,
                title: 'Delivering Dynamic Mobile Experiences with Reusable Architecture and Live Updates',
                speakerIds: [14, 26],
                startTime: '15:30 PM',
                endTime: '16:00 PM',
                description: 'AAA offers a dynamic experience to over 60 million customers around the United States. Broken into regions, AAA can deliver unique experiences to customers in different areas. Each region is responsible for their own application experience, but customers download the same application on the app stores. How does AAA deliver brand continuity across all regions while enabling club autonomy? <p>Discover how AAA achieves a balance of unique customer experience and app parity by reusing architecture, leveraging CI/CD pipelines to deliver a seamless user flow, and maintaining brand continuity with a centralized design system.</p>'
            },
            {
                id: 12,
                title: 'Micro Frontends for Mobile with Ionic Portals',
                speakerIds: [20, 23],
                startTime: '16:00 PM',
                endTime: '16:30 PM',
                description: 'App development is rapidly evolving. Applications were originally built using a monolithic approach—a single-tiered code base combining UI and data into a single platform. Now, companies are moving towards micro frontends, an architectural style where UI front-end are composed of independent components that can be built by different teams at different times, saving development time and costs.<p>Micro frontends need to be reusable and portable. They need to be able to communicate with other parts of the app, provide a seamless and virtually invisible to users, and be easy to update without updating the larger app. Given these points, web technology is a great way to deliver micro experiences not only for the web but for mobile as well.</p><p>Discover how using Ionic Portals will allow your team to deliver micro experiences on mobile apps.</p>'
            },
            {
                id: 13,
                title: 'Conference Wrap-up',
                speakerIds: [21],
                startTime: '16:30 PM',
                endTime: '17:00 PM',
                description: 'End of the day wrap-up with final thoughts.'
            },
        ];
    }
    getAgenda() {
        return this.agenda;
    }
    getAgendaItem(id) {
        return this.agenda.find(agenda => agenda.id === id);
    }
    formatTalkTime(agendaItem) {
        return `${this.convertToTwelveHourFormat(agendaItem.startTime)} - ${this.convertToTwelveHourFormat(agendaItem.endTime)} CT`;
    }
    // Talk times are stored in military time to make it easier to work with
    // local notifications. Convert to 12 hour clock format.
    // Likely better ways to do this with Date object.
    // time: 08:00 AM, 12:30 PM, 14:00 PM etc.
    convertToTwelveHourFormat(time) {
        let hour = parseInt(time.substring(0, 2), 10);
        if (hour > 12) {
            hour = hour - 12;
        }
        return hour + time.slice(2);
    }
};
AgendaService.ctorParameters = () => [];
AgendaService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], AgendaService);



/***/ }),

/***/ 6986:
/*!*******************************************************!*\
  !*** ./src/app/services/push-notification.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushNotificationService": () => (/* binding */ PushNotificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/push-notifications */ 1704);



let PushNotificationService = class PushNotificationService {
    checkPermissionStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return (yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.checkPermissions()).receive;
        });
    }
    registerPush() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.register();
        });
    }
    promptPushRegistration() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            // Request permission to use push notifications
            // iOS will prompt user and return if they granted permission or not
            // Android will just grant without prompting
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.requestPermissions().then(result => {
                if (result.receive === 'granted') {
                    // Register with Apple / Google to receive push via APNS/FCM
                    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.register();
                }
                else {
                    // Show some error
                    console.log('error: ' + result.receive);
                }
            });
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.addListener('registration', (token) => {
                console.log('push registration success');
            });
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.addListener('registrationError', (error) => {
                console.log('Error on registration: ' + JSON.stringify(error));
            });
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.addListener('pushNotificationReceived', (notification) => {
                console.log('Push received: ' + JSON.stringify(notification));
            });
            // handle deep links
            // https://devdactic.com/push-notifications-ionic-capacitor/
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_0__.PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
                console.log('Push action performed: ' + JSON.stringify(notification));
                const data = notification.notification.data;
                console.log(data);
            });
        });
    }
};
PushNotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PushNotificationService);



/***/ }),

/***/ 1188:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/preferences */ 5191);



let StorageService = class StorageService {
    setPushNotesModalShown() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({
                key: 'pushmodalshown',
                value: 'true'
            });
        });
    }
    getPushNotesModalShown() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const { value } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({ key: 'pushmodalshown' });
            return value;
        });
    }
};
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 4970:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/preferences/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5191:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/preferences/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preferences": () => (/* binding */ Preferences)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4970);

const Preferences = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Preferences', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_preferences_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7333)).then(m => new m.PreferencesWeb())
});



/***/ }),

/***/ 3470:
/*!****************************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/definitions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />


/***/ }),

/***/ 1704:
/*!**********************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushNotifications": () => (/* binding */ PushNotifications)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 3470);

const PushNotifications = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('PushNotifications', {});



/***/ }),

/***/ 4941:
/*!************************************************************************************!*\
  !*** ./src/app/components/agenda-avatars/agenda-avatars.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --outline-color: var(--ion-background-color);\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\nion-avatar {\n  width: 100%;\n  height: 100%;\n  /**\n   * Do not use outline here because\n   * WebKit does not respect border\n   * radius when using outline.\n   */\n  box-shadow: 0px 0px 0px 4px var(--outline-color);\n}\n\n/**\n * Possibly a better way to do this?\n */\n\nion-avatar:nth-of-type(1) {\n  z-index: 1;\n}\n\nion-avatar:nth-of-type(2) {\n  margin-left: -6px;\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW5kYS1hdmF0YXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNENBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFFQSxtQkFBQTtFQUVBLHVCQUFBO0VBQUEsa0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUE7Ozs7SUFBQTtFQUtBLGdEQUFBO0FBRkY7O0FBS0E7O0VBQUE7O0FBR0E7RUFDRSxVQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUVBLFVBQUE7QUFIRiIsImZpbGUiOiJhZ2VuZGEtYXZhdGFycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1vdXRsaW5lLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICAvKipcbiAgICogRG8gbm90IHVzZSBvdXRsaW5lIGhlcmUgYmVjYXVzZVxuICAgKiBXZWJLaXQgZG9lcyBub3QgcmVzcGVjdCBib3JkZXJcbiAgICogcmFkaXVzIHdoZW4gdXNpbmcgb3V0bGluZS5cbiAgICovXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDRweCB2YXIoLS1vdXRsaW5lLWNvbG9yKTtcbn1cblxuLyoqXG4gKiBQb3NzaWJseSBhIGJldHRlciB3YXkgdG8gZG8gdGhpcz9cbiAqL1xuaW9uLWF2YXRhcjpudGgtb2YtdHlwZSgxKSB7XG4gIHotaW5kZXg6IDE7XG59XG5cbmlvbi1hdmF0YXI6bnRoLW9mLXR5cGUoMikge1xuICBtYXJnaW4tbGVmdDogLTZweDtcblxuICB6LWluZGV4OiAwO1xufVxuIl19 */";

/***/ }),

/***/ 8854:
/*!******************************************************************************!*\
  !*** ./src/app/components/agenda-card/agenda-card.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  border-radius: 16px;\n  margin: 0 0 16px 0;\n  background: var(--ion-background-color);\n  box-shadow: none;\n}\n\nion-card-header {\n  padding-bottom: 2px;\n}\n\nion-card-header ion-card-title {\n  margin: 16px 0 8px 0;\n  font-size: 18px;\n}\n\nion-card-header ion-card-subtitle {\n  text-transform: none;\n  font-weight: 500;\n  font-size: 14px;\n}\n\nion-card-content {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW5kYS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsbUJBQUE7RUFFQSxrQkFBQTtFQUVBLHVDQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxvQkFBQTtFQUVBLGVBQUE7QUFMRjs7QUFRQTtFQUNFLG9CQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0FBTkYiLCJmaWxlIjoiYWdlbmRhLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwic2FzczptYXRoXCI7XG4kY2FyZC1tYXJnaW46IDE2cHg7XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcblxuICBtYXJnaW46IDAgMCAjeyRjYXJkLW1hcmdpbn0gMDtcblxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogI3skY2FyZC1tYXJnaW59IDAgbWF0aC5kaXYoJGNhcmQtbWFyZ2luLCAyKSAwO1xuXG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuIl19 */";

/***/ }),

/***/ 8847:
/*!******************************************************************************************!*\
  !*** ./src/app/components/permissions-modal/permissions-modal.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "ion-header::after {\n  content: none;\n}\n\nion-toolbar {\n  --padding-top: 8px;\n  --background: transparent;\n  --border-color: transparent;\n}\n\n.ios h1 {\n  margin: 0 0 0 5px;\n}\n\n.md h1 {\n  margin: 0 0 0 16px;\n}\n\nion-text {\n  color: var(--ion-color-step-650);\n  font-size: 16px;\n  line-height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcm1pc3Npb25zLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoicGVybWlzc2lvbnMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5pb3MgaDEge1xuICBtYXJnaW46IDAgMCAwIDVweDtcbn1cblxuLm1kIGgxIHtcbiAgbWFyZ2luOiAwIDAgMCAxNnB4O1xufVxuXG5pb24tdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02NTApO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuIl19 */";

/***/ }),

/***/ 3398:
/*!******************************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2980:
/*!************************************************************************************!*\
  !*** ./src/app/components/agenda-avatars/agenda-avatars.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container\">\n  <ion-avatar *ngFor=\"let url of urls\" [ngStyle]=\"{ 'width': size, 'height': size }\">\n    <img [src]=\"url\" />\n  </ion-avatar>\n</div>\n";

/***/ }),

/***/ 7154:
/*!******************************************************************************!*\
  !*** ./src/app/components/agenda-card/agenda-card.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card\n  (click)=\"navigateToAgendaItemPage()\"\n  [button]=\"true\"\n>\n  <ion-card-header>\n    <app-agenda-avatars size=\"48px\" [urls]=\"photoUrls\"></app-agenda-avatars>\n    <ion-card-title clas=\"eas-header-small\">{{ agenda.title }}</ion-card-title>\n    <ion-card-subtitle>\n      <div *ngFor=\"let speaker of speakers\">\n        {{ speaker.firstName }} {{ speaker.lastName }}, {{ speaker.role }}, {{ getCompanyName(speaker.companyId) }}\n      </div>\n      </ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>{{ formatTalkTime(agenda) }}</ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 9904:
/*!******************************************************************************************!*\
  !*** ./src/app/components/permissions-modal/permissions-modal.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <h1 class=\"eas-header-large\" slot=\"start\">Don't miss a thing</h1>\n    <ion-buttons id=\"close-button\" slot=\"end\">\n      <ion-button color=\"medium\" (click)=\"closeModal()\">\n        <ion-icon name=\"close-circle\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-start ion-padding-end\" [scrollY]=\"false\">\n  <ion-text>Get reminders when the event is about to start, talk recordings have been published,\n    and more!\n  </ion-text> <br /><br />\n  <ion-button (click)=\"onContinue()\" expand=\"block\">Continue</ion-button>\n</ion-content>\n";

/***/ }),

/***/ 7374:
/*!******************************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"fade\" [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Agenda\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-content\" [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Agenda</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"ion-padding\">\n    <app-agenda-card\n      *ngFor=\"let item of agenda; trackBy: trackItems\"\n      [id]=\"item.id\"\n    ></app-agenda-card>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tab1_tab1_module_ts.js.map