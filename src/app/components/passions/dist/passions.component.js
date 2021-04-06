"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PassionsComponent = void 0;
var core_1 = require("@angular/core");
var aos_1 = require("aos");
var PassionsComponent = /** @class */ (function () {
    function PassionsComponent() {
        this.contentItem = [
            {
                contentId: 0,
                contentTitle: "l'aéronautique",
                contentText: "Passionné depuis tout petit par tout ce qui vole dans le ciel, j'en ai fait mon métier. 10 années durant, j'ai été navigateur aérien au sein de la Marine Nationale. C'est un métier passionnant, rigoureux, et très enrichissant. ",
                contentIcon: '/assets/images/fly.svg'
            },
            {
                contentId: 1,
                contentTitle: 'la course à pied',
                contentText: "Ben oui, faut bien compenser les bons apéros ! Adepte des petites courses entre 10 et 15 km, j'essaie de courir en moyenne 1 à 2 fois par semaine. Le plus dur? c'est de se lancer, mais une fois parti !",
                contentIcon: '/assets/images/fly.svg'
            },
            {
                contentId: 2,
                contentTitle: 'la vie',
                contentText: "Que ce soit entre copains autour d'une bière locale, avec ma chérie dans un hamac au bord de la mer, j'aime profiter de chaque instant. ",
                contentIcon: '/assets/images/fly.svg'
            },
            {
                contentId: 3,
                contentTitle: "l'écologie",
                contentText: "Engagé de la première heure, je m'investi dans les associations comme Terre en Vie, pour défendre l'écologie et l'environnement. Directeur de l'entreprise Baladoù, nous avons créé un carnet de randonnées itinérant pour découvrir le pays de Vannes autrement. Également bénévoles dans une épicerie associative, je donne régulièrement de mon temps pour les valeurs que je souhaite défendre : l'environnement, le local et la partage. Si vous vous reconnaissez dans ces mots, nou sommes fait pour travailler ensemble. ",
                contentIcon: '/assets/images/fly.svg'
            },
        ];
    }
    PassionsComponent.prototype.ngOnInit = function () {
        aos_1["default"].init();
    };
    PassionsComponent = __decorate([
        core_1.Component({
            selector: 'app-passions',
            templateUrl: './passions.component.html',
            styleUrls: ['./passions.component.scss']
        })
    ], PassionsComponent);
    return PassionsComponent;
}());
exports.PassionsComponent = PassionsComponent;
