import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Contact } from './contact';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  baseUrl = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) { } 

  getContactList(): Observable<Contact[]> {
    const url = this.baseUrl;
    const httpOptions = {
     headers: new HttpHeaders({
       'Content-type': 'application/json',
      })
    };
      return this.http.get<Contact[]>(url, httpOptions);
    }
}
