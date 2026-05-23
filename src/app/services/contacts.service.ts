import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private apiUrl = `${environment.apiUrl}/contacts`;

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    const headers = new HttpHeaders({
      'X-Api-Key': environment.apiKey
    });
    return this.http.get<Contact[]>(this.apiUrl, { headers });
  }
}
