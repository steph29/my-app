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
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.cardContainerMenu = [
            {
                cardTitle: 'Création',
                cardBody: "Parce que votre site est la première image de vous, celui-ci doit vous ressembler le plus possible. Avoir sa propre identité visuelle ce n'est pas juste une question de goût sur les couleurs. Elle doit faire passer le bon message et marquer les esprits en un seul coup de regard.",
                cardImage: '/assets/images/nature3.jpg'
            },
            {
                cardTitle: 'Sécurité',
                cardBody: "La sécurisation des données personnelles est devenue un enjeu majeur pour les utilisateurs et les entreprises lors de leur navigation sur le web. Les infrastructures d'hébergement de nos sites, c'est-à-dire les serveurs, sont optimisés pour une haute sécurité. Nous mettons tout en oeuvre pour permettre un temps de réponse rapide de votre site. (HTTPS, HSTS, CSP, X-XSS...) Nous utilisons tous les outils disponibles pour assurer une fiabilité de performance de votre site. Nous fournissons un audit mensuel sur cette prestation.",
                cardImage: '/assets/images/nature1.jpg'
            },
            {
                cardTitle: 'Optimisation',
                cardBody: 'Nous développons votre site et utilisons tous les outils à notre disposition pour rendre votre site internet "ULTRA PERFORMANT". Nous travaillons sur l\'optimisation du temps de chargement des pages et sur la sécurité de votre projet. ',
                cardImage: '/assets/images/nature2.jpg'
            },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var ratio = 0.1;
        var options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };
        var handleIntersect = function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > ratio) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        };
        var observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
            observer.observe(r);
        }));
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
