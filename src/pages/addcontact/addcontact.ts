import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contacts, ContactField} from 'ionic-native';

/*
  Generated class for the Addcontact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
  	selector: 'page-addcontact',
  	templateUrl: 'addcontact.html'
  })
  export class AddcontactPage {

  	newcontact = {
  		displayname: '',
  		email: '',
  		phonenumber: ''
  	}

  	constructor(public navCtrl: NavController, public navParams: NavParams) {}

  	ionViewDidLoad() {
  		console.log('ionViewDidLoad AddcontactPage');
  	}

  	AddContact(newcontact) {
  		var contact = Contacts.create();
  		contact.displayName = newcontact.displayname;
  		
  		var contactfield = new ContactField();
  		contactfield.value = newcontact.phonenumber;
  		contactfield.pref = true;
  		
  		var numbersection = [];
  		numbersection.push(contactfield);
  		contact.phoneNumbers = numbersection;

      var contactfield2 = new ContactField();
      contactfield2.value = newcontact.email;
      contactfield2.pref = true;
      
      var emailsection = [];
      emailsection.push(contactfield2);
      contact.emails = emailsection;
  		
  		contact.save().then((contact) => {
  			alert('Contact Saved');
  		}, (error) => {
  			alert(error);
  		})
  		
  	}

  }
