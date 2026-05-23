import { Component } from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactsComponent],
  template: '<app-contacts />'
})
export class AppComponent {}
