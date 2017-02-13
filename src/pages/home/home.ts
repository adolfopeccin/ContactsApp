import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Contacts, ContactFieldType} from 'ionic-native';

import { AddcontactPage} from '../addcontact/addcontact';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	searchstring = '';
	searchresult = [];
	search = false;
	ourvalue: ContactFieldType[] = ['displayName'];

	constructor(public navCtrl: NavController) {

	}

	AddContact() {
		this.navCtrl.push(AddcontactPage);
	}
	
	FindContact(val) {
		Contacts.find(this.ourvalue, {filter: val}).then((contacts) => {
			this.searchresult = contacts;
			alert(JSON.stringify(contacts[0]));
		})
		
		if(this.searchresult.length == 0)
			this.searchresult.push({displayName: 'No Contacts found'});  
		this.search = true;    
	}

}
