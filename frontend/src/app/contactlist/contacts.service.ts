import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Contact } from './contact';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
   })
 };

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  baseUrl = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) { } 

  getContactList(): Observable<Contact[]> {
    const url = this.baseUrl;
    
      return this.http.get<Contact[]>(url, httpOptions);
    }

  // ADD CONTACT DETAILS
  addContact(payload:any): Observable<Contact[]> {
    const url = 'http://localhost:3000/contact';
    return this.http.post<Contact[]>(url, payload, httpOptions)
  }
  
  // DELETE CONTACT DETAILS
  deleteContact(id): Observable<Contact[]> {
    const url = 'http://localhost:3000/contact/'+id;
    return this.http.delete<Contact[]>(url, httpOptions)
  }
  
  // UPDATE CONTACT DETAILS
  updateContact(payload:any,id): Observable<Contact[]> {
    const url = 'http://localhost:3000/contact/'+id;
    return this.http.put<Contact[]>(url, payload, httpOptions)
  }
}
