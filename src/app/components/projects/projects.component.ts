import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
projectsItems = [
    { projectId: 1, projectImage: '/assets/images/TEV.png', projectTitle: 'Terre En Vie', projectText: "Lorem ipsum dolor sit amet consectetur adipisicing elit" },
    { projectId: 2, projectImage: '/assets/images/nature1.jpg', projectTitle: 'Evaluation 1 Digital Campus Live', projectText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { projectId: 3, projectImage: '/assets/images/nature2.jpg', projectTitle: 'John d\'oeuf: projet Flutter ', projectText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { projectId: 4, projectImage: '/assets/images/nature3.jpg', projectTitle: 'Ma super Agence: projet Symfony', projectText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
    { projectId: 5, projectImage: '/assets/images/nature4.jpg', projectTitle: 'Training Frontend: projet Frontend Mentor', projectText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' }, 
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
