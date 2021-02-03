"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactComponent = void 0;
var core_1 = require("@angular/core");
var emailjs_com_1 = require("emailjs-com");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.alert = false;
        this.alertWrong = false;
        this.isValidFormSubmitted = false;
    }
    ContactComponent.prototype.onFormSubmit = function (userForm) {
        console.log(userForm);
    };
    ContactComponent.prototype.resetUserForm = function (userForm) {
        userForm.resetForm();
    };
    ContactComponent.prototype.onFormSubmit2 = function (form) {
        this.isValidFormSubmitted = false;
        if (form.valid) {
            this.isValidFormSubmitted = true;
        }
        else {
            return;
        }
        var userName = form.controls['name'].value;
    };
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.validation = function (data, event) {
        var _this = this;
        if (data.from_name == '' || data.user_email == ' ' || data.message == '') {
            this.alertWrong = true;
            this.alert = false;
        }
        else {
            this.alertWrong = false;
            this.alert = true;
            event.preventDefault();
            emailjs_com_1["default"]
                .sendForm('service_adysozh', 'template_9on6n8k', event.target, 'user_1cpdEQHngg0lEUgm4n1Ul')
                .then(function (result) {
                console.log(result.text);
                _this.alert = true;
            }, function (error) {
                console.log(error.text);
            });
        }
    };
    ContactComponent.prototype.sendEmail = function (event) { };
    ContactComponent.prototype.closeAlert = function () {
        this.alert = false;
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss'],
            providers: [ng_bootstrap_1.NgbAlertConfig]
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
