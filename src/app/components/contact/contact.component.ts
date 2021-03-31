import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [NgbAlertConfig],
})
export class ContactComponent implements OnInit {
  alert: boolean = false;
  alertWrong: boolean = false;

  constructor() {}

  onFormSubmit(userForm: NgForm) {
    console.log(userForm);
  }
  resetUserForm(userForm: NgForm) {
    userForm.resetForm();
  }
  isValidFormSubmitted = false;

  onFormSubmit2(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.valid) {
      this.isValidFormSubmitted = true;
    } else {
      return;
    }
    let userName = form.controls['name'].value;
  }

  ngOnInit(): void {}

  validation(data, event: Event) {
    if (data.from_name == '' || data.user_email == ' ' || data.message == '') {
      this.alertWrong = true;
      this.alert = false;
    } else {
      this.alertWrong = false;
      this.alert = true;
      event.preventDefault();

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

  public sendEmail(event: Event) {}

  closeAlert() {
    this.alert = false;
  }
}


