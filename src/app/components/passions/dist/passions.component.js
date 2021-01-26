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
var PassionsComponent = /** @class */ (function () {
    function PassionsComponent() {
        this.progressMenu = [
            {
                progressId: 0,
                prgressValue: 100,
                prgressName: 'HTML'
            },
            {
                progressId: 1,
                prgressValue: 90,
                prgressName: 'CSS / SCSS'
            },
            {
                progressId: 2,
                prgressValue: 75,
                prgressName: 'Angular'
            },
            {
                progressId: 3,
                prgressValue: 80,
                prgressName: 'JS'
            },
            {
                progressId: 4,
                prgressValue: 50,
                prgressName: 'PHP'
            },
            {
                progressId: 5,
                prgressValue: 75,
                prgressName: 'Server JS'
            },
            {
                progressId: 6,
                prgressValue: 75,
                prgressName: 'Node JS'
            },
            {
                progressId: 7,
                prgressValue: 70,
                prgressName: 'MongoDB'
            },
            {
                progressId: 8,
                prgressValue: 70,
                prgressName: 'MySQL'
            },
            {
                progressId: 9,
                prgressValue: 70,
                prgressName: 'Flutter'
            },
            {
                progressId: 10,
                prgressValue: 50,
                prgressName: 'iOS'
            },
        ];
    }
    PassionsComponent.prototype.ngOnInit = function () {
        var ratio = 0.1;
        var options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };
        var handleIntersect = function (entries, obeserver) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > ratio)
                    entry.target.classList.add('reveal-visible');
                obeserver.unobserve(entry.target);
            });
        };
        var observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
            observer.observe(r);
        }));
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
