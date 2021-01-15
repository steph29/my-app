"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectsComponent = void 0;
var core_1 = require("@angular/core");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.projectsItems = [
            {
                projectId: 0,
                projectImage: '/assets/images/TEV.png',
                projectTitle: 'Terre En Vie',
                projectText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                projectUrl: 'https://www.terreenvie.com/benevoles/inscription.php',
                projectColor: '#ffffff'
            },
            {
                projectId: 1,
                projectImage: '/assets/images/nature1.jpg',
                projectTitle: 'Evaluation 1 Digital Campus Live',
                projectText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                projectUrl: '#',
                projectColor: '#ececec'
            },
            {
                projectId: 2,
                projectImage: '/assets/images/nature2.jpg',
                projectTitle: "John d'oeuf: projet Flutter ",
                projectText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                projectUrl: 'https://apps.apple.com/kn/app/john-doeuf/id1520277206',
                projectColor: '#ffffff'
            },
            {
                projectId: 3,
                projectImage: '/assets/images/nature3.jpg',
                projectTitle: 'Ma super Agence: projet Symfony',
                projectText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                projectUrl: '#',
                projectColor: '#ececec'
            },
            {
                projectId: 4,
                projectImage: '/assets/images/nature4.jpg',
                projectTitle: 'Training Frontend: projet Frontend Mentor',
                projectText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                projectUrl: '#',
                projectColor: '#ffffff'
            },
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () { };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-projects',
            templateUrl: './projects.component.html',
            styleUrls: ['./projects.component.scss']
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
