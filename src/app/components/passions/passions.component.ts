import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passions',
  templateUrl: './passions.component.html',
  styleUrls: ['./passions.component.scss'],
})
export class PassionsComponent implements OnInit {
  progressMenu = [
    {
      progressId: 0,
      prgressValue: 100,
      prgressName: 'HTML',
    },
    {
      progressId: 1,
      prgressValue: 90,
      prgressName: 'CSS / SCSS',
    },
    {
      progressId: 2,
      prgressValue: 75,
      prgressName: 'Angular',
    },
    {
      progressId: 3,
      prgressValue: 80,
      prgressName: 'JS',
    },
    {
      progressId: 4,
      prgressValue: 50,
      prgressName: 'PHP',
    },

    {
      progressId: 5,
      prgressValue: 75,
      prgressName: 'Server JS',
    },
    {
      progressId: 6,
      prgressValue: 75,
      prgressName: 'Node JS',
    },
    {
      progressId: 7,
      prgressValue: 70,
      prgressName: 'MongoDB',
    },
    {
      progressId: 8,
      prgressValue: 70,
      prgressName: 'MySQL',
    },
    {
      progressId: 9,
      prgressValue: 70,
      prgressName: 'Flutter',
    },
    {
      progressId: 10,
      prgressValue: 50,
      prgressName: 'iOS',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
