import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [NgbAlertConfig],
})
export class ContactComponent implements OnInit {
  alert: boolean = false;
  bool: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public sendEmail(event: Event) {
    event.preventDefault();
    if (this.bool) {
      console.log('success');
    } else {
      emailjs
        .sendForm(
          'service_adysozh',
          'template_9on6n8k',
          event.target as HTMLFormElement,
          'user_1cpdEQHngg0lEUgm4n1Ul'
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
            this.alert = true;
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }
  closeAlert() {
    this.alert = false;
  }
}
