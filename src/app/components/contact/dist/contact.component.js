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
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.sendEmail = function (e) {
        var modal = document.getElementsByClassName('modal');
        e.preventDefault();
        emailjs_com_1["default"]
            .sendForm('service_adysozh', 'template_9on6n8k', e.target, 'user_1cpdEQHngg0lEUgm4n1Ul')
            .then(function (result) {
            console.log(result.text);
        }, function (error) {
            console.log(error.text);
        });
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss']
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
