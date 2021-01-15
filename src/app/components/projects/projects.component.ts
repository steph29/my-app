import { Component, OnInit } from '@angular/core';

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
      projectText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      projectUrl: 'https://www.terreenvie.com/benevoles/inscription.php',
<<<<<<< Updated upstream
      projectColor: '#ffffff',
    },
    {
      projectId: 1,
=======
    },
    {
      projectId: 2,
>>>>>>> Stashed changes
      projectImage: '/assets/images/nature1.jpg',
      projectTitle: 'Evaluation 1 Digital Campus Live',
      projectText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      projectUrl: '',
      projectColor: '#ececec',
    },
    {
      projectId: 2,
      projectImage: '/assets/images/nature2.jpg',
      projectTitle: "John d'oeuf: projet Flutter ",
      projectText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      projectUrl: '',
      projectColor: '#ffffff',
    },
    {
      projectId: 3,
      projectImage: '/assets/images/nature3.jpg',
      projectTitle: 'Ma super Agence: projet Symfony',
      projectText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      projectUrl: '',
      projectColor: '#ececec',
    },
    {
      projectId: 4,
      projectImage: '/assets/images/nature4.jpg',
      projectTitle: 'Training Frontend: projet Frontend Mentor',
      projectText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      projectUrl: '',
      projectColor: '#ffffff',
    },
  ];


  ngOnInit(): void {}
}
