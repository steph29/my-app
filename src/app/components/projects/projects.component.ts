import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Subject } from 'rxjs';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectsItems = [
    {
      projectId: 0,
      projectImage: '/assets/images/TEV.png',
      projectTitle: 'Terre En Vie',
      projectText:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum architecto eos culpa labore modi cum veniam sequi a id excepturi maxime quia, cupiditate ex molestiae eius numquam nostrum, delectus neque Explicabo culpa perferendis voluptatum quam tenetur. Cumque, cupiditate aliquam odit amet similique deserunt aperiam fugit harum rem, a quis cum qui dicta voluptatibus officia repellendus vel esse porro doloremque explicabo? Repudiandae saepe qui eum similique nemo in, molestiae unde voluptate! Consequuntur eaque, qui quam, obcaecati provident nostrum nesciunt, perferendis voluptatem ipsum aspernatur eius ipsam tempore. Natus corrupti reiciendis numquam illo. Blanditiis in sequi quo, perferendis, corporis ullam exercitationem magnam laborum necessitatibus ab aliquid voluptatibus, soluta eveniet. Mollitia pariatur, exercitationem illo, quisquam quos laboriosam doloremque eaque cupiditate praesentium a iusto? Maiores.',
      projectUrl: 'https://www.terreenvie.com/benevoles/inscription.php',
      projectColor: '#ffffff',
      
    },
    {
      projectId: 1,
      projectImage: '/assets/images/nature1.jpg',
      projectTitle: 'Evaluation 1 Digital Campus Live',
      projectText:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum architecto eos culpa labore modi cum veniam sequi a id excepturi maxime quia, cupiditate ex molestiae eius numquam nostrum, delectus neque Explicabo culpa perferendis voluptatum quam tenetur. Cumque, cupiditate aliquam odit amet similique deserunt aperiam fugit harum rem, a quis cum qui dicta voluptatibus officia repellendus vel esse porro doloremque explicabo? Repudiandae saepe qui eum similique nemo in, molestiae unde voluptate! Consequuntur eaque, qui quam, obcaecati provident nostrum nesciunt, perferendis voluptatem ipsum aspernatur eius ipsam tempore. Natus corrupti reiciendis numquam illo. Blanditiis in sequi quo, perferendis, corporis ullam exercitationem magnam laborum necessitatibus ab aliquid voluptatibus, soluta eveniet. Mollitia pariatur, exercitationem illo, quisquam quos laboriosam doloremque eaque cupiditate praesentium a iusto? Maiores.',
      projectUrl: '#',
      projectColor: '#ececec',
    },
    {
      projectId: 2,
      projectImage: '/assets/images/nature2.jpg',
      projectTitle: "John d'oeuf: projet Flutter ",
      projectText:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum architecto eos culpa labore modi cum veniam sequi a id excepturi maxime quia, cupiditate ex molestiae eius numquam nostrum, delectus neque Explicabo culpa perferendis voluptatum quam tenetur. Cumque, cupiditate aliquam odit amet similique deserunt aperiam fugit harum rem, a quis cum qui dicta voluptatibus officia repellendus vel esse porro doloremque explicabo? Repudiandae saepe qui eum similique nemo in, molestiae unde voluptate! Consequuntur eaque, qui quam, obcaecati provident nostrum nesciunt, perferendis voluptatem ipsum aspernatur eius ipsam tempore. Natus corrupti reiciendis numquam illo. Blanditiis in sequi quo, perferendis, corporis ullam exercitationem magnam laborum necessitatibus ab aliquid voluptatibus, soluta eveniet. Mollitia pariatur, exercitationem illo, quisquam quos laboriosam doloremque eaque cupiditate praesentium a iusto? Maiores.',
      projectUrl: 'https://apps.apple.com/kn/app/john-doeuf/id1520277206',
      projectColor: '#ffffff',
    },
    {
      projectId: 3,
      projectImage: '/assets/images/nature3.jpg',
      projectTitle: 'Ma super Agence: projet Symfony',
      projectText:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum architecto eos culpa labore modi cum veniam sequi a id excepturi maxime quia, cupiditate ex molestiae eius numquam nostrum, delectus neque Explicabo culpa perferendis voluptatum quam tenetur. Cumque, cupiditate aliquam odit amet similique deserunt aperiam fugit harum rem, a quis cum qui dicta voluptatibus officia repellendus vel esse porro doloremque explicabo? Repudiandae saepe qui eum similique nemo in, molestiae unde voluptate! Consequuntur eaque, qui quam, obcaecati provident nostrum nesciunt, perferendis voluptatem ipsum aspernatur eius ipsam tempore. Natus corrupti reiciendis numquam illo. Blanditiis in sequi quo, perferendis, corporis ullam exercitationem magnam laborum necessitatibus ab aliquid voluptatibus, soluta eveniet. Mollitia pariatur, exercitationem illo, quisquam quos laboriosam doloremque eaque cupiditate praesentium a iusto? Maiores.',
      projectUrl: '#',
      projectColor: '#ececec',
    },
    {
      projectId: 4,
      projectImage: '/assets/images/nature4.jpg',
      projectTitle: 'Training Frontend: projet Frontend Mentor',
      projectText:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum architecto eos culpa labore modi cum veniam sequi a id excepturi maxime quia, cupiditate ex molestiae eius numquam nostrum, delectus neque Explicabo culpa perferendis voluptatum quam tenetur. Cumque, cupiditate aliquam odit amet similique deserunt aperiam fugit harum rem, a quis cum qui dicta voluptatibus officia repellendus vel esse porro doloremque explicabo? Repudiandae saepe qui eum similique nemo in, molestiae unde voluptate! Consequuntur eaque, qui quam, obcaecati provident nostrum nesciunt, perferendis voluptatem ipsum aspernatur eius ipsam tempore. Natus corrupti reiciendis numquam illo. Blanditiis in sequi quo, perferendis, corporis ullam exercitationem magnam laborum necessitatibus ab aliquid voluptatibus, soluta eveniet. Mollitia pariatur, exercitationem illo, quisquam quos laboriosam doloremque eaque cupiditate praesentium a iusto? Maiores.',
      projectUrl: '#',
      projectColor: '#ffffff',
    },
  ];

  ngOnInit(): void {
    AOS.init();
  }
}
