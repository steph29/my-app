import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  public sendEmail(e: Event) {
    const modal = document.getElementsByClassName('modal');
    e.preventDefault();
    emailjs
      .sendForm(
        'service_adysozh',
        'template_9on6n8k',
        e.target as HTMLFormElement,
        'user_1cpdEQHngg0lEUgm4n1Ul'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
