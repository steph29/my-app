import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  name!: string;
  email!: string;
  message!: string;

  constructor() {}

  ngOnInit(): void {}
  processForm() {
    const myInfo = `Mon nom est ${this.name}, mon email est ${this.email}, et voici mon message: ${this.message}`;
    alert(myInfo);
  }
}
