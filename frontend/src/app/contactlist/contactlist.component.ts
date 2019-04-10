import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  public contactLists : any = [];

  constructor(private contactService: ContactsService) { 
    this.contactService.getContactList().subscribe(
      (response) => { this.contactLists = response }
    )
  }

  ngOnInit() {
  }

}
