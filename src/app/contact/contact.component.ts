import { Component, OnInit } from '@angular/core';
import { UserContact } from '../models/contact.user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	public oUser: UserContact;

	constructor() { 
		this.oUser = new UserContact('','','','');
	}

	ngOnInit() {
	}

	mOnSubmit(oForm){
		console.log("Submit event executed!");
		console.log(this.oUser);
		oForm.reset();
	}

}
