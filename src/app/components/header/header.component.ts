import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  menuItems = [
    { linkId: 1, linkName: 'home', linkUrl: '' },
    { linkId: 2, linkName: 'projects', linkUrl: 'projects' },
    { linkId: 3, linkName: 'passions', linkUrl: 'passions' },
  ];
  buttonItems = [{ linkId: 4, linkName: 'contact', linkUrl: 'contact' }];
  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
  constructor() {}

  ngOnInit(): void {}
}
