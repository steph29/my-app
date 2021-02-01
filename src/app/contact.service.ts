import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private url = 'http://localhost:4200/contact/send';
  constructor(private http: HttpClientModule) {}
}
