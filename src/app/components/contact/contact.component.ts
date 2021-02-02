import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { NgbModule, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [NgbAlertConfig],
})
export class ContactComponent implements OnInit {
  alert: boolean = false;
  alertWrong: boolean = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    let dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      height: '200px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {}
  public sendEmail(e: Event) {
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
          this.alert = true;
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  closeAlert() {
    this.alert = false;
  }
}
