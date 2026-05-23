import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  loading = true;
  error = '';

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe({
      next: (data) => {
        this.contacts = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al cargar contactos. Verificá que la API esté corriendo.';
        this.loading = false;
      }
    });
  }
}
