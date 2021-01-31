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
  msg =
    'Votre message a bien été envoyé. Je vous répondrai le plus vite possible. Merci ';
  processForm() {
    const myInfo = `Mon nom est ${this.name}, mon email est ${this.email}, et voici mon message: ${this.message}`;
    alert(
      '<article class="message is-primary"><div class="message-header"><p>MERCI</p></div><div class="message-body">{{ msg }}</div></article>'
    );
    alert(myInfo);
  }
}
