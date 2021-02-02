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
var dialog_1 = require("@angular/material/dialog");
var dialog_component_1 = require("./dialog/dialog.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(dialog) {
        this.dialog = dialog;
        this.alert = false;
        this.alertWrong = false;
    }
    ContactComponent.prototype.openDialog = function () {
        var dialogConfig = new dialog_1.MatDialogConfig();
        var dialogRef = this.dialog.open(dialog_component_1.DialogComponent, {
            width: '450px',
            height: '200px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.sendEmail = function (e) {
        var _this = this;
        e.preventDefault();
        emailjs_com_1["default"]
            .sendForm('service_adysozh', 'template_9on6n8k', e.target, 'user_1cpdEQHngg0lEUgm4n1Ul')
            .then(function (result) {
            console.log(result.text);
            _this.alert = true;
        }, function (error) {
            console.log(error.text);
        });
    };
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
