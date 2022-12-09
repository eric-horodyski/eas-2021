"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_swag-modal_swag-modal_page_ts"],{

/***/ 3070:
/*!**********************************************************!*\
  !*** ./src/app/components/swag-modal/swag-modal.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwagModalPage": () => (/* binding */ SwagModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _swag_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swag-modal.page.html?ngResource */ 8189);
/* harmony import */ var _swag_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swag-modal.page.scss?ngResource */ 9733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_hubspot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/hubspot.service */ 2143);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types */ 4984);







let SwagModalPage = class SwagModalPage {
    constructor(hubspotService, modalController) {
        this.hubspotService = hubspotService;
        this.modalController = modalController;
        this.hubspotData = new _types__WEBPACK_IMPORTED_MODULE_3__.HubspotFormData();
        this.states = [];
        this.states = hubspotService.getStates();
    }
    submitForm() {
        this.hubspotForm.onSubmit(undefined);
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.hubspotForm.valid) {
                return;
            }
            ;
            const success = yield this.hubspotService.submitToHubspot(this.hubspotData);
            if (success) {
                yield this.modalController.dismiss(success);
            }
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(null);
        });
    }
};
SwagModalPage.ctorParameters = () => [
    { type: _services_hubspot_service__WEBPACK_IMPORTED_MODULE_2__.HubspotService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
SwagModalPage.propDecorators = {
    hubspotForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['hubspotForm',] }]
};
SwagModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-swag-modal',
        template: _swag_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_swag_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SwagModalPage);



/***/ }),

/***/ 2143:
/*!*********************************************!*\
  !*** ./src/app/services/hubspot.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HubspotService": () => (/* binding */ HubspotService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let HubspotService = class HubspotService {
    constructor() {
        this.FORM_SUBMIT_URL = 'https://api.hsforms.com/submissions/v3/integration/submit/3776657/75127e93-3da1-4368-b3a7-c680d53483ac';
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'District Of Columbia',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Puerto Rico',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];
    }
    // Convert form data into Hubspot data structure
    buildHubspotRequest(data) {
        const finalData = {
            fields: []
        };
        for (let i = 0; i < Object.keys(data).length; i++) {
            const fieldName = Object.keys(data)[i];
            const value = Object.values(data)[i];
            finalData.fields.push({
                name: fieldName,
                value
            });
        }
        return finalData;
    }
    submitToHubspot(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const hubspotData = this.buildHubspotRequest(data);
            const response = yield fetch(this.FORM_SUBMIT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(hubspotData)
            });
            return response.ok;
        });
    }
    getStates() {
        return this.states;
    }
};
HubspotService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], HubspotService);



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

/***/ 9733:
/*!***********************************************************************!*\
  !*** ./src/app/components/swag-modal/swag-modal.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "ion-list-header {\n  font-size: 12px;\n  font-weight: 400;\n  margin: 0;\n  text-transform: uppercase;\n  color: var(--ion-color-step-500);\n}\n\nion-list {\n  margin-top: 8px !important;\n}\n\n/**\n * This might be an Ionic bug\n */\n\nion-item {\n  --padding-start: 16px !important;\n  --border-color: var(--ion-color-step-200);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3YWctbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsU0FBQTtFQUVBLHlCQUFBO0VBRUEsZ0NBQUE7QUFGRjs7QUFLQTtFQUNFLDBCQUFBO0FBRkY7O0FBS0E7O0VBQUE7O0FBR0E7RUFDRSxnQ0FBQTtFQUNBLHlDQUFBO0FBRkYiLCJmaWxlIjoic3dhZy1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgbWFyZ2luOiAwO1xuXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTUwMCk7XG59XG5cbmlvbi1saXN0IHtcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qKlxuICogVGhpcyBtaWdodCBiZSBhbiBJb25pYyBidWdcbiAqL1xuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCk7XG59XG4iXX0= */";

/***/ }),

/***/ 8189:
/*!***********************************************************************!*\
  !*** ./src/app/components/swag-modal/swag-modal.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" collapse=\"fade\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title>Enter to win</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"submitForm()\">Submit</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"page-content\">\n  <form (ngSubmit)=\"onSubmit()\" #hubspotForm=\"ngForm\">\n    <ion-list-header>Contact Info</ion-list-header>\n    <ion-list [inset]=\"true\">\n      <ion-item>\n        <ion-label>First Name</ion-label>\n        <ion-input placeholder=\"John\" [(ngModel)]=\"hubspotData.firstname\" name=\"firstname\" #firstName=\"ngModel\" required></ion-input>\n\n        <ion-text slot=\"error\" *ngIf=\"!firstName.valid && (!firstName.pristine || hubspotForm.submitted)\">First name is required</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label>Last Name</ion-label>\n        <ion-input placeholder=\"Doe\" [(ngModel)]=\"hubspotData.lastname\" name=\"lastname\" #lastName=\"ngModel\" required></ion-input>\n        <ion-text slot=\"error\" *ngIf=\"!lastName.valid && (!lastName.pristine || hubspotForm.submitted)\">Last name is required</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label>Work Email</ion-label>\n        <ion-input type=\"email\" placeholder=\"jdoe@ionic.io\" [(ngModel)]=\"hubspotData.email\" name=\"email\" #email=\"ngModel\" required></ion-input>\n        <ion-text class=\"ion-padding-bottom\" slot=\"error\" *ngIf=\"!email.valid && (!email.pristine || hubspotForm.submitted)\">Email is required</ion-text>\n\n      </ion-item>\n    </ion-list>\n    <ion-list-header>Mailing Address</ion-list-header>\n    <ion-list [inset]=\"true\">\n      <ion-item>\n        <ion-label>Street</ion-label>\n        <ion-input placeholder=\"123 Any Street\" [(ngModel)]=\"hubspotData.address\" name=\"address\" #street=\"ngModel\" required></ion-input>\n        <ion-text slot=\"error\" *ngIf=\"!street.valid && (!street.pristine || hubspotForm.submitted)\">Street is required</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label>City</ion-label>\n        <ion-input placeholder=\"Boston\" [(ngModel)]=\"hubspotData.city\" name=\"city\" #city=\"ngModel\" required></ion-input>\n        <ion-text slot=\"error\" *ngIf=\"!city.valid && (!city.pristine || hubspotForm.submitted)\">City is required</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-label>Zip</ion-label>\n        <ion-input placeholder=\"02215\" [(ngModel)]=\"hubspotData.zip\" name=\"zip\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Country</ion-label>\n        <ion-select [(ngModel)]=\"hubspotData.country_pl_\" value=\"United States\" name=\"country\" #country=\"ngModel\" okText=\"OK\" cancelText=\"Dismiss\" required>\n          <ion-select-option value=\"United States\">United States</ion-select-option>\n          <ion-select-option value=\"Aland Islands\">Aland Islands</ion-select-option>\n          <ion-select-option value=\"Angola\">Angola</ion-select-option>\n          <ion-select-option value=\"Anguilla\">Anguilla</ion-select-option>\n          <ion-select-option value=\"Antarctica\">Antarctica</ion-select-option>\n          <ion-select-option value=\"Antigua & Barbuda\">Antigua & Barbuda</ion-select-option>\n          <ion-select-option value=\"Argentina\">Argentina</ion-select-option>\n          <ion-select-option value=\"Armenia\">Armenia</ion-select-option>\n          <ion-select-option value=\"Aruba\">Aruba</ion-select-option>\n          <ion-select-option value=\"Australia\">Australia</ion-select-option>\n          <ion-select-option value=\"Austria\">Austria</ion-select-option>\n          <ion-select-option value=\"Azerbaijan\">Azerbaijan</ion-select-option>\n          <ion-select-option value=\"Baden\">Baden</ion-select-option>\n          <ion-select-option value=\"Bahamas\">Bahamas</ion-select-option>\n          <ion-select-option value=\"Bahrain\">Bahrain</ion-select-option>\n          <ion-select-option value=\"Bangladesh\">Bangladesh</ion-select-option>\n          <ion-select-option value=\"Barbados\">Barbados</ion-select-option>\n          <ion-select-option value=\"Belarus\">Belarus</ion-select-option>\n          <ion-select-option value=\"Belgium\">Belgium</ion-select-option>\n          <ion-select-option value=\"Belize\">Belize</ion-select-option>\n          <ion-select-option value=\"Benin\">Benin</ion-select-option>\n          <ion-select-option value=\"Bhutan\">Bhutan</ion-select-option>\n          <ion-select-option value=\"Bolivia\">Bolivia</ion-select-option>\n          <ion-select-option value=\"Bosnia & Herzegovina\">Bosnia & Herzegovina</ion-select-option>\n          <ion-select-option value=\"Botswana\">Botswana</ion-select-option>\n          <ion-select-option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</ion-select-option>\n          <ion-select-option value=\"Brazil\">Brazil</ion-select-option>\n          <ion-select-option value=\"Brunei\">Brunei</ion-select-option>\n          <ion-select-option value=\"Bulgaria\">Bulgaria</ion-select-option>\n          <ion-select-option value=\"Burkina Faso\">Burkina Faso</ion-select-option>\n          <ion-select-option value=\"Burundi\">Burundi</ion-select-option>\n          <ion-select-option value=\"Cabo Verde\">Cabo Verde</ion-select-option>\n          <ion-select-option value=\"Cambodia\">Cambodia</ion-select-option>\n          <ion-select-option value=\"Cameroon\">Cameroon</ion-select-option>\n          <ion-select-option value=\"Canada\">Canada</ion-select-option>\n          <ion-select-option value=\"Cape Verde\">Cape Verde</ion-select-option>\n          <ion-select-option value=\"Cayman Islands\">Cayman Islands</ion-select-option>\n          <ion-select-option value=\"Central African Republic\">Central African Republic</ion-select-option>\n          <ion-select-option value=\"Chad\">Chad</ion-select-option>\n          <ion-select-option value=\"Chile\">Chile</ion-select-option>\n          <ion-select-option value=\"China\">China</ion-select-option>\n          <ion-select-option value=\"Christmas Island\">Christmas Island</ion-select-option>\n          <ion-select-option value=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</ion-select-option>\n          <ion-select-option value=\"Colombia\">Colombia</ion-select-option>\n          <ion-select-option value=\"Comoros\">Comoros</ion-select-option>\n          <ion-select-option value=\"Cook Islands\">Cook Islands</ion-select-option>\n          <ion-select-option value=\"Costa Rica\">Costa Rica</ion-select-option>\n          <ion-select-option value=\"Croatia\">Croatia</ion-select-option>\n          <ion-select-option value=\"Cuba\">Cuba</ion-select-option>\n          <ion-select-option value=\"Cyprus\">Cyprus</ion-select-option>\n          <ion-select-option value=\"Czech Republic\">Czech Republic</ion-select-option>\n          <ion-select-option value=\"Côte d'Ivoire\">Côte d'Ivoire</ion-select-option>\n          <ion-select-option value=\"Democratic Republic of the Congo\">Democratic Republic of the Congo</ion-select-option>\n          <ion-select-option value=\"Denmark\">Denmark</ion-select-option>\n          <ion-select-option value=\"Djibouti\">Djibouti</ion-select-option>\n          <ion-select-option value=\"Dominica\">Dominica</ion-select-option>\n          <ion-select-option value=\"Dominican Republic\">Dominican Republic</ion-select-option>\n          <ion-select-option value=\"Ecuador\">Ecuador</ion-select-option>\n          <ion-select-option value=\"Egypt\">Egypt</ion-select-option>\n          <ion-select-option value=\"El Salvador\">El Salvador</ion-select-option>\n          <ion-select-option value=\"Equatorial Guinea\">Equatorial Guinea</ion-select-option>\n          <ion-select-option value=\"Eritrea\">Eritrea</ion-select-option>\n          <ion-select-option value=\"Estonia\">Estonia</ion-select-option>\n          <ion-select-option value=\"Eswatini\">Eswatini</ion-select-option>\n          <ion-select-option value=\"Ethiopia\">Ethiopia</ion-select-option>\n          <ion-select-option value=\"Falkland Islands (Malvinas)\">Falkland Islands (Malvinas)</ion-select-option>\n          <ion-select-option value=\"Faroe Islands\">Faroe Islands</ion-select-option>\n          <ion-select-option value=\"Fiji\">Fiji</ion-select-option>\n          <ion-select-option value=\"Finland\">Finland</ion-select-option>\n          <ion-select-option value=\"France\">France</ion-select-option>\n          <ion-select-option value=\"French Guiana\">French Guiana</ion-select-option>\n          <ion-select-option value=\"French Southern Territories\">French Southern Territories</ion-select-option>\n          <ion-select-option value=\"Gabon\">Gabon</ion-select-option>\n          <ion-select-option value=\"Gambia\">Gambia</ion-select-option>\n          <ion-select-option value=\"Georgia\">Georgia</ion-select-option>\n          <ion-select-option value=\"Germany\">Germany</ion-select-option>\n          <ion-select-option value=\"Ghana\">Ghana</ion-select-option>\n          <ion-select-option value=\"Gibraltar\">Gibraltar</ion-select-option>\n          <ion-select-option value=\"Greece\">Greece</ion-select-option>\n          <ion-select-option value=\"Greenland\">Greenland</ion-select-option>\n          <ion-select-option value=\"Grenada\">Grenada</ion-select-option>\n          <ion-select-option value=\"Guatemala\">Guatemala</ion-select-option>\n          <ion-select-option value=\"Guinea\">Guinea</ion-select-option>\n          <ion-select-option value=\"Guinea-Bissau\">Guinea-Bissau</ion-select-option>\n          <ion-select-option value=\"Guyana\">Guyana</ion-select-option>\n          <ion-select-option value=\"Haiti\">Haiti</ion-select-option>\n          <ion-select-option value=\"Holy See\">Holy See</ion-select-option>\n          <ion-select-option value=\"Honduras\">Honduras</ion-select-option>\n          <ion-select-option value=\"Hungary\">Hungary</ion-select-option>\n          <ion-select-option value=\"Iceland\">Iceland</ion-select-option>\n          <ion-select-option value=\"India\">India</ion-select-option>\n          <ion-select-option value=\"Indonesia\">Indonesia</ion-select-option>\n          <ion-select-option value=\"Iran\">Iran</ion-select-option>\n          <ion-select-option value=\"Iraq\">Iraq</ion-select-option>\n          <ion-select-option value=\"Ireland\">Ireland</ion-select-option>\n          <ion-select-option value=\"Israel\">Israel</ion-select-option>\n          <ion-select-option value=\"Italy\">Italy</ion-select-option>\n          <ion-select-option value=\"Jamaica\">Jamaica</ion-select-option>\n          <ion-select-option value=\"Japan\">Japan</ion-select-option>\n          <ion-select-option value=\"Jordan\">Jordan</ion-select-option>\n          <ion-select-option value=\"Kazakhstan\">Kazakhstan</ion-select-option>\n          <ion-select-option value=\"Kenya\">Kenya</ion-select-option>\n          <ion-select-option value=\"Kiribati\">Kiribati</ion-select-option>\n          <ion-select-option value=\"Kosovo\">Kosovo</ion-select-option>\n          <ion-select-option value=\"Kuwait\">Kuwait</ion-select-option>\n          <ion-select-option value=\"Kyrgyzstan\">Kyrgyzstan</ion-select-option>\n          <ion-select-option value=\"Laos\">Laos</ion-select-option>\n          <ion-select-option value=\"Latvia\">Latvia</ion-select-option>\n          <ion-select-option value=\"Lebanon\">Lebanon</ion-select-option>\n          <ion-select-option value=\"Lesotho\">Lesotho</ion-select-option>\n          <ion-select-option value=\"Liberia\">Liberia</ion-select-option>\n          <ion-select-option value=\"Libya\">Libya</ion-select-option>\n          <ion-select-option value=\"Liechtenstein\">Liechtenstein</ion-select-option>\n          <ion-select-option value=\"Lithuania\">Lithuania</ion-select-option>\n          <ion-select-option value=\"Luxembourg\">Luxembourg</ion-select-option>\n          <ion-select-option value=\"Macedonia, the former Yugoslav Republic of\">Macedonia</ion-select-option>\n          <ion-select-option value=\"Madagascar\">Madagascar</ion-select-option>\n          <ion-select-option value=\"Malawi\">Malawi</ion-select-option>\n          <ion-select-option value=\"Malaysia\">Malaysia</ion-select-option>\n          <ion-select-option value=\"Maldives\">Maldives</ion-select-option>\n          <ion-select-option value=\"Mali\">Mali</ion-select-option>\n          <ion-select-option value=\"Malta\">Malta</ion-select-option>\n          <ion-select-option value=\"Marshall Islands\">Marshall Islands</ion-select-option>\n          <ion-select-option value=\"Mauritania\">Mauritania</ion-select-option>\n          <ion-select-option value=\"Mauritius\">Mauritius</ion-select-option>\n          <ion-select-option value=\"Mexico\">Mexico</ion-select-option>\n          <ion-select-option value=\"Micronesia\">Micronesia</ion-select-option>\n          <ion-select-option value=\"Moldova\">Moldova</ion-select-option>\n          <ion-select-option value=\"Monaco\">Monaco</ion-select-option>\n          <ion-select-option value=\"Mongolia\">Mongolia</ion-select-option>\n          <ion-select-option value=\"Montenegro\">Montenegro</ion-select-option>\n          <ion-select-option value=\"Morocco\">Morocco</ion-select-option>\n          <ion-select-option value=\"Mozambique\">Mozambique</ion-select-option>\n          <ion-select-option value=\"Myanmar/Burma\">Myanmar/Burma</ion-select-option>\n          <ion-select-option value=\"Namibia\">Namibia</ion-select-option>\n          <ion-select-option value=\"Nauru\">Nauru</ion-select-option>\n          <ion-select-option value=\"Nepal\">Nepal</ion-select-option>\n          <ion-select-option value=\"Netherlands\">Netherlands</ion-select-option>\n          <ion-select-option value=\"New Zealand\">New Zealand</ion-select-option>\n          <ion-select-option value=\"Nicaragua\">Nicaragua</ion-select-option>\n          <ion-select-option value=\"Niger\">Niger</ion-select-option>\n          <ion-select-option value=\"Nigeria\">Nigeria</ion-select-option>\n          <ion-select-option value=\"North Korea\">North Korea</ion-select-option>\n          <ion-select-option value=\"Norway\">Norway</ion-select-option>\n          <ion-select-option value=\"Oman\">Oman</ion-select-option>\n          <ion-select-option value=\"Pacific Islands\">Pacific Islands</ion-select-option>\n          <ion-select-option value=\"Pakistan\">Pakistan</ion-select-option>\n          <ion-select-option value=\"Palau\">Palau</ion-select-option>\n          <ion-select-option value=\"Panama\">Panama</ion-select-option>\n          <ion-select-option value=\"Papua New Guinea\">Papua New Guinea</ion-select-option>\n          <ion-select-option value=\"Paraguay\">Paraguay</ion-select-option>\n          <ion-select-option value=\"Peru\">Peru</ion-select-option>\n          <ion-select-option value=\"Philippines\">Philippines</ion-select-option>\n          <ion-select-option value=\"Poland\">Poland</ion-select-option>\n          <ion-select-option value=\"Portugal\">Portugal</ion-select-option>\n          <ion-select-option value=\"Puerto Rico\">Puerto Rico</ion-select-option>\n          <ion-select-option value=\"Qatar\">Qatar</ion-select-option>\n          <ion-select-option value=\"Romania\">Romania</ion-select-option>\n          <ion-select-option value=\"Russia\">Russia</ion-select-option>\n          <ion-select-option value=\"Rwanda\">Rwanda</ion-select-option>\n          <ion-select-option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</ion-select-option>\n          <ion-select-option value=\"Saint Lucia\">Saint Lucia</ion-select-option>\n          <ion-select-option value=\"Saint Vincent and the Grenadines\">Saint Vincent and the Grenadines</ion-select-option>\n          <ion-select-option value=\"Samoa\">Samoa</ion-select-option>\n          <ion-select-option value=\"San Marino\">San Marino</ion-select-option>\n          <ion-select-option value=\"Sao Tome and Principe\">Sao Tome and Principe</ion-select-option>\n          <ion-select-option value=\"Saudi Arabia\">Saudi Arabia</ion-select-option>\n          <ion-select-option value=\"Senegal\">Senegal</ion-select-option>\n          <ion-select-option value=\"Serbia\">Serbia</ion-select-option>\n          <ion-select-option value=\"Seychelles\">Seychelles</ion-select-option>\n          <ion-select-option value=\"Sierra Leone\">Sierra Leone</ion-select-option>\n          <ion-select-option value=\"Singapore\">Singapore</ion-select-option>\n          <ion-select-option value=\"Slovakia\">Slovakia</ion-select-option>\n          <ion-select-option value=\"Slovenia\">Slovenia</ion-select-option>\n          <ion-select-option value=\"Solomon Islands\">Solomon Islands</ion-select-option>\n          <ion-select-option value=\"Somalia\">Somalia</ion-select-option>\n          <ion-select-option value=\"South Africa\">South Africa</ion-select-option>\n          <ion-select-option value=\"South Korea\">South Korea</ion-select-option>\n          <ion-select-option value=\"South Sudan\">South Sudan</ion-select-option>\n          <ion-select-option value=\"Spain\">Spain</ion-select-option>\n          <ion-select-option value=\"Sri Lanka\">Sri Lanka</ion-select-option>\n          <ion-select-option value=\"Sudan\">Sudan</ion-select-option>\n          <ion-select-option value=\"Suriname\">Suriname</ion-select-option>\n          <ion-select-option value=\"Swaziland\">Swaziland</ion-select-option>\n          <ion-select-option value=\"Sweden\">Sweden</ion-select-option>\n          <ion-select-option value=\"Switzerland\">Switzerland</ion-select-option>\n          <ion-select-option value=\"Syria\">Syria</ion-select-option>\n          <ion-select-option value=\"Taiwan\">Taiwan</ion-select-option>\n          <ion-select-option value=\"Tajikistan\">Tajikistan</ion-select-option>\n          <ion-select-option value=\"Tanzania\">Tanzania</ion-select-option>\n          <ion-select-option value=\"Thailand\">Thailand</ion-select-option>\n          <ion-select-option value=\"Togo\">Togo</ion-select-option>\n          <ion-select-option value=\"Tonga\">Tonga</ion-select-option>\n          <ion-select-option value=\"Trinidad & Tobago\">Trinidad & Tobago</ion-select-option>\n          <ion-select-option value=\"Tunisia\">Tunisia</ion-select-option>\n          <ion-select-option value=\"Turkey\">Turkey</ion-select-option>\n          <ion-select-option value=\"Turkmenistan\">Turkmenistan</ion-select-option>\n          <ion-select-option value=\"Tuvalu\">Tuvalu</ion-select-option>\n          <ion-select-option value=\"Uganda\">Uganda</ion-select-option>\n          <ion-select-option value=\"Ukraine\">Ukraine</ion-select-option>\n          <ion-select-option value=\"United Arab Emirates\">United Arab Emirates</ion-select-option>\n          <ion-select-option value=\"United Kingdom\">United Kingdom</ion-select-option>\n          <ion-select-option value=\"Uruguay\">Uruguay</ion-select-option>\n          <ion-select-option value=\"Uzbekistan\">Uzbekistan</ion-select-option>\n          <ion-select-option value=\"Vanuatu\">Vanuatu</ion-select-option>\n          <ion-select-option value=\"Vatican City\">Vatican City</ion-select-option>\n          <ion-select-option value=\"Venezuela\">Venezuela</ion-select-option>\n          <ion-select-option value=\"Vietnam\">Vietnam</ion-select-option>\n          <ion-select-option value=\"Yemen\">Yemen</ion-select-option>\n          <ion-select-option value=\"Zambia\">Zambia</ion-select-option>\n          <ion-select-option value=\"Zimbabwe\">Zimbabwe</ion-select-option>\n        </ion-select>\n        <ion-text class=\"ion-padding-bottom\" slot=\"error\" *ngIf=\"!country.valid && (!country.pristine || hubspotForm.submitted)\">Country is required</ion-text>\n      </ion-item>\n      <ion-item *ngIf=\"hubspotData.country_pl_ === 'United States'\">\n        <ion-label>State</ion-label>\n        <ion-select [(ngModel)]=\"hubspotData.state\" value=\"Alabama\" name=\"state\" #state=\"ngModel\" okText=\"OK\" cancelText=\"Dismiss\" required>\n          <!-- <ion-select-option *ngFor=\"let item in states; let i = index\" [value]=\"states[i]\">{{ states[i] }}</ion-select-option> -->\n          <ion-select-option value=\"Alabama\">Alabama</ion-select-option>\n          <ion-select-option value=\"Alaska\">Alaska</ion-select-option>\n          <ion-select-option value=\"Arizona\">Arizona</ion-select-option>\n          <ion-select-option value=\"Arkansas\">Arkansas</ion-select-option>\n          <ion-select-option value=\"California\">California</ion-select-option>\n          <ion-select-option value=\"Colorado\">Colorado</ion-select-option>\n          <ion-select-option value=\"Connecticut\">Connecticut</ion-select-option>\n          <ion-select-option value=\"Delaware\">Delaware</ion-select-option>\n          <ion-select-option value=\"District Of Columbia\">District Of Columbia</ion-select-option>\n          <ion-select-option value=\"Florida\">Florida</ion-select-option>\n          <ion-select-option value=\"Georgia\">Georgia</ion-select-option>\n          <ion-select-option value=\"Hawaii\">Hawaii</ion-select-option>\n          <ion-select-option value=\"Idaho\">Idaho</ion-select-option>\n          <ion-select-option value=\"Illinois\">Illinois</ion-select-option>\n          <ion-select-option value=\"Indiana\">Indiana</ion-select-option>\n          <ion-select-option value=\"Iowa\">Iowa</ion-select-option>\n          <ion-select-option value=\"Kansas\">Kansas</ion-select-option>\n          <ion-select-option value=\"Kentucky\">Kentucky</ion-select-option>\n          <ion-select-option value=\"Louisiana\">Louisiana</ion-select-option>\n          <ion-select-option value=\"Maine\">Maine</ion-select-option>\n          <ion-select-option value=\"Maryland\">Maryland</ion-select-option>\n          <ion-select-option value=\"Massachusetts\">Massachusetts</ion-select-option>\n          <ion-select-option value=\"Michigan\">Michigan</ion-select-option>\n          <ion-select-option value=\"Minnesota\">Minnesota</ion-select-option>\n          <ion-select-option value=\"Mississippi\">Mississippi</ion-select-option>\n          <ion-select-option value=\"Missouri\">Missouri</ion-select-option>\n          <ion-select-option value=\"Montana\">Montana</ion-select-option>\n          <ion-select-option value=\"Nebraska\">Nebraska</ion-select-option>\n          <ion-select-option value=\"Nevada\">Nevada</ion-select-option>\n          <ion-select-option value=\"New Hampshire\">New Hampshire</ion-select-option>\n          <ion-select-option value=\"New Jersey\">New Jersey</ion-select-option>\n          <ion-select-option value=\"New Mexico\">New Mexico</ion-select-option>\n          <ion-select-option value=\"New York\">New York</ion-select-option>\n          <ion-select-option value=\"North Carolina\">North Carolina</ion-select-option>\n          <ion-select-option value=\"North Dakota\">North Dakota</ion-select-option>\n          <ion-select-option value=\"Ohio\">Ohio</ion-select-option>\n          <ion-select-option value=\"Oklahoma\">Oklahoma</ion-select-option>\n          <ion-select-option value=\"Oregon\">Oregon</ion-select-option>\n          <ion-select-option value=\"Pennsylvania\">Pennsylvania</ion-select-option>\n          <ion-select-option value=\"Puerto Rico\">Puerto Rico</ion-select-option>\n          <ion-select-option value=\"Rhode Island\">Rhode Island</ion-select-option>\n          <ion-select-option value=\"South Carolina\">South Carolina</ion-select-option>\n          <ion-select-option value=\"South Dakota\">South Dakota</ion-select-option>\n          <ion-select-option value=\"Tennessee\">Tennessee</ion-select-option>\n          <ion-select-option value=\"Texas\">Texas</ion-select-option>\n          <ion-select-option value=\"Utah\">Utah</ion-select-option>\n          <ion-select-option value=\"Vermont\">Vermont</ion-select-option>\n          <ion-select-option value=\"Virginia\">Virginia</ion-select-option>\n          <ion-select-option value=\"Washington\">Washington</ion-select-option>\n          <ion-select-option value=\"West Virginia\">West Virginia</ion-select-option>\n          <ion-select-option value=\"Wisconsin\">Wisconsin</ion-select-option>\n          <ion-select-option value=\"Wyoming\">Wyoming</ion-select-option>\n        </ion-select>\n        <ion-text class=\"ion-padding-bottom\" slot=\"error\" *ngIf=\"!state.valid && hubspotData.country_pl_ === 'United States' && (!state.pristine || hubspotForm.submitted)\">State is required</ion-text>\n      </ion-item>\n    </ion-list>\n    <ion-list-header>Preferences</ion-list-header>\n    <ion-list [inset]=\"true\">\n      <ion-item>\n        <ion-label>T-shirt Size</ion-label>\n        <ion-select [(ngModel)]=\"hubspotData.t_shirt_size\" value=\"Small\" #tshirt=\"ngModel\" name=\"tshirt\" okText=\"OK\" cancelText=\"Dismiss\" required>\n          <ion-select-option value=\"Small\">Small</ion-select-option>\n          <ion-select-option value=\"Medium\">Medium</ion-select-option>\n          <ion-select-option value=\"Large\">Large</ion-select-option>\n          <ion-select-option value=\"X-Large\">X-Large</ion-select-option>\n          <ion-select-option value=\"2X- Large\">2X-Large</ion-select-option>\n        </ion-select>\n        <ion-text class=\"ion-padding-bottom\" slot=\"error\" *ngIf=\"!tshirt.valid && (!tshirt.pristine || hubspotForm.submitted)\">T-shirt Size is required</ion-text>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_swag-modal_swag-modal_page_ts.js.map