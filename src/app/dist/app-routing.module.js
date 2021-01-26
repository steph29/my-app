"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contact_component_1 = require("./components/contact/contact.component");
var home_component_1 = require("./components/home/home.component");
var passions_component_1 = require("./components/passions/passions.component");
var projects_component_1 = require("./components/projects/projects.component");
var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: home_component_1.HomeComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'portfolio',
        component: projects_component_1.ProjectsComponent
    },
    {
        path: 'la-team',
        component: passions_component_1.PassionsComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
