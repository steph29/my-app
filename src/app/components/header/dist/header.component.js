"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.menuItems = [
            { linkId: 1, linkName: 'home', linkUrl: '' },
            { linkId: 2, linkName: 'portfolio', linkUrl: 'portfolio' },
            { linkId: 3, linkName: 'la team', linkUrl: 'la-team' },
        ];
        this.buttonItems = [{ linkId: 4, linkName: 'contact', linkUrl: 'contact' }];
    }
    HeaderComponent.prototype.toggleNavbar = function () {
        this.navBurger.nativeElement.classList.toggle('is-active');
        this.navMenu.nativeElement.classList.toggle('is-active');
    };
    HeaderComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.ViewChild('navBurger')
    ], HeaderComponent.prototype, "navBurger");
    __decorate([
        core_1.ViewChild('navMenu')
    ], HeaderComponent.prototype, "navMenu");
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
