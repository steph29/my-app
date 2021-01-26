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
                projectText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum architecto eos culpa labore modi cum veniam sequi a id excepturi maxime quia, cupiditate ex molestiae eius numquam nostrum, delectus neque Explicabo culpa perferendis voluptatum quam tenetur. Cumque, cupiditate aliquam odit amet similique deserunt aperiam fugit harum rem, a quis cum qui dicta voluptatibus officia repellendus vel esse porro doloremque explicabo? Repudiandae saepe qui eum similique nemo in, molestiae unde voluptate! Consequuntur eaque, qui quam, obcaecati provident nostrum nesciunt, perferendis voluptatem ipsum aspernatur eius ipsam tempore. Natus corrupti reiciendis numquam illo. Blanditiis in sequi quo, perferendis, corporis ullam exercitationem magnam laborum necessitatibus ab aliquid voluptatibus, soluta eveniet. Mollitia pariatur, exercitationem illo, quisquam quos laboriosam doloremque eaque cupiditate praesentium a iusto? Maiores.',
                projectUrl: 'https://www.terreenvie.com/benevoles/inscription.php',
                projectColor: '#ffffff'
            },
            {
                projectId: 1,
                projectImage: '/assets/images/nature1.jpg',
                projectTitle: 'Evaluation 1 Digital Campus Live',
                projectText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum architecto eos culpa labore modi cum veniam sequi a id excepturi maxime quia, cupiditate ex molestiae eius numquam nostrum, delectus neque Explicabo culpa perferendis voluptatum quam tenetur. Cumque, cupiditate aliquam odit amet similique deserunt aperiam fugit harum rem, a quis cum qui dicta voluptatibus officia repellendus vel esse porro doloremque explicabo? Repudiandae saepe qui eum similique nemo in, molestiae unde voluptate! Consequuntur eaque, qui quam, obcaecati provident nostrum nesciunt, perferendis voluptatem ipsum aspernatur eius ipsam tempore. Natus corrupti reiciendis numquam illo. Blanditiis in sequi quo, perferendis, corporis ullam exercitationem magnam laborum necessitatibus ab aliquid voluptatibus, soluta eveniet. Mollitia pariatur, exercitationem illo, quisquam quos laboriosam doloremque eaque cupiditate praesentium a iusto? Maiores.',
                projectUrl: '#',
                projectColor: '#ececec'
            },
            {
                projectId: 2,
                projectImage: '/assets/images/nature2.jpg',
                projectTitle: "John d'oeuf: projet Flutter ",
                projectText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum architecto eos culpa labore modi cum veniam sequi a id excepturi maxime quia, cupiditate ex molestiae eius numquam nostrum, delectus neque Explicabo culpa perferendis voluptatum quam tenetur. Cumque, cupiditate aliquam odit amet similique deserunt aperiam fugit harum rem, a quis cum qui dicta voluptatibus officia repellendus vel esse porro doloremque explicabo? Repudiandae saepe qui eum similique nemo in, molestiae unde voluptate! Consequuntur eaque, qui quam, obcaecati provident nostrum nesciunt, perferendis voluptatem ipsum aspernatur eius ipsam tempore. Natus corrupti reiciendis numquam illo. Blanditiis in sequi quo, perferendis, corporis ullam exercitationem magnam laborum necessitatibus ab aliquid voluptatibus, soluta eveniet. Mollitia pariatur, exercitationem illo, quisquam quos laboriosam doloremque eaque cupiditate praesentium a iusto? Maiores.',
                projectUrl: 'https://apps.apple.com/kn/app/john-doeuf/id1520277206',
                projectColor: '#ffffff'
            },
            {
                projectId: 3,
                projectImage: '/assets/images/nature3.jpg',
                projectTitle: 'Ma super Agence: projet Symfony',
                projectText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum architecto eos culpa labore modi cum veniam sequi a id excepturi maxime quia, cupiditate ex molestiae eius numquam nostrum, delectus neque Explicabo culpa perferendis voluptatum quam tenetur. Cumque, cupiditate aliquam odit amet similique deserunt aperiam fugit harum rem, a quis cum qui dicta voluptatibus officia repellendus vel esse porro doloremque explicabo? Repudiandae saepe qui eum similique nemo in, molestiae unde voluptate! Consequuntur eaque, qui quam, obcaecati provident nostrum nesciunt, perferendis voluptatem ipsum aspernatur eius ipsam tempore. Natus corrupti reiciendis numquam illo. Blanditiis in sequi quo, perferendis, corporis ullam exercitationem magnam laborum necessitatibus ab aliquid voluptatibus, soluta eveniet. Mollitia pariatur, exercitationem illo, quisquam quos laboriosam doloremque eaque cupiditate praesentium a iusto? Maiores.',
                projectUrl: '#',
                projectColor: '#ececec'
            },
            {
                projectId: 4,
                projectImage: '/assets/images/nature4.jpg',
                projectTitle: 'Training Frontend: projet Frontend Mentor',
                projectText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum architecto eos culpa labore modi cum veniam sequi a id excepturi maxime quia, cupiditate ex molestiae eius numquam nostrum, delectus neque Explicabo culpa perferendis voluptatum quam tenetur. Cumque, cupiditate aliquam odit amet similique deserunt aperiam fugit harum rem, a quis cum qui dicta voluptatibus officia repellendus vel esse porro doloremque explicabo? Repudiandae saepe qui eum similique nemo in, molestiae unde voluptate! Consequuntur eaque, qui quam, obcaecati provident nostrum nesciunt, perferendis voluptatem ipsum aspernatur eius ipsam tempore. Natus corrupti reiciendis numquam illo. Blanditiis in sequi quo, perferendis, corporis ullam exercitationem magnam laborum necessitatibus ab aliquid voluptatibus, soluta eveniet. Mollitia pariatur, exercitationem illo, quisquam quos laboriosam doloremque eaque cupiditate praesentium a iusto? Maiores.',
                projectUrl: '#',
                projectColor: '#ffffff'
            },
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
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
