"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var aos_1 = require("aos");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.cardContainerMenu = [
            {
                cardTitle: "#frontend",
                cardBody: "Je vous propose un beau site rempli de HTML5 - CSS3, Bootstrap animé de Javascript. Le tout mené par l’exploitation d’API REST et Angular. Parce que votre site est la première image de vous, celui-ci doit vous ressembler le plus possible. Avoir son propre univers ce n'est pas juste une question de goût et de couleur. Il doit faire passer le bon message et marquer les esprits en un seul coup de regard."
            },
            {
                cardTitle: '#backend',
                cardBody: 'Un site beau, c’est bien, quand il est fonctionnel c’est mieux !  C’est pourquoi j\'utilise pour discuter avec les serveurs du PHP, du NodeJS et des bases de données tels que MySql et MongoDB.'
            },
            {
                cardTitle: '#mobile',
                cardBody: 'De la cuisson des oeufs en passant par la météo du jour et vos futures discutions par chat, je développe vos applications sur-mesure en fonction de vos besoins. Flutter est mon meilleur allié pour produire sur IOS et Android. La géolocalisation, l’authentification, la persistance et les bases de données remplissent mon carnet de compétences et augmente les possibilités !'
            },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        aos_1["default"].init();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
