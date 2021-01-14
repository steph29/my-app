import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuItems = [
    { linkId: 1, linkName: 'home', linkUrl: '' },
    { linkId: 2, linkName: 'projects', linkUrl: 'projects' },
    { linkId: 3, linkName: 'passions', linkUrl: 'passions' },
    { linkId: 4, linkName: 'contact', linkUrl: 'contact' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
