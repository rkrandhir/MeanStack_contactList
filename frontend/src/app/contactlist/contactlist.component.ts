import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  public contactLists : any = [];
  contactForm: FormGroup;

  constructor(private contactService: ContactsService, private fb: FormBuilder) { 
    
  }

  getContactList() {
    this.contactService.getContactList().subscribe(
      (response) => { this.contactLists = response }
    )
  }

  ngOnInit() {
    this.onLoadForm();
    this.getContactList();
  }

  //contact Form
  onLoadForm() {
    this.contactForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      phone: ['']
    });
  }

  //on Submit Contact Form
  onSubmit() {
    let payload = {
      "first_name": this.contactForm.controls.first_name.value,
      "last_name": this.contactForm.controls.last_name.value,
      "phone": this.contactForm.controls.phone.value,
    }

    //payload.push(this.contactForm.value);
    console.log(payload);
    
    return this.contactService.addContact(payload).subscribe(
      data => {
        console.log('Data Submitted');
        this.ngOnInit();
      },
      error => {
        console.log('Error in data')
      }
    )
  }

  onDeleteContact(id) {
    console.log(id)
    return this.contactService.deleteContact(id).subscribe(
      data => {
        console.log('Data Deleted');
        this.ngOnInit();
      },
      error => {
        console.log('Error in data')
      }
    )
  }

}
