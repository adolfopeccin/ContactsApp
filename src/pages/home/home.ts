import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Storage, SqlStorage } from 'ionic-framework/ionic';



@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	contacts: any = [];
	// groupedContacts = [];

	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
		// this.groupContacts(this.contacts);
	}

	addContact() {
		let prompt = this.alertCtrl.create({
			title: 'Add Contact',
			inputs: [
			{
				name: 'name',
				placeholder: 'Name'
			},
			{
				name: 'tel',
				placeholder: 'Telephone',
				type: 'tel'
			},
			{
				name: 'email',
				placeholder: 'Email',
				type: 'email'
			}
			],
			buttons: [
			{
				text: 'Cancel'
			},
			{
				text: 'Add',
				handler: data => {
					this.contacts.push(data);
					this.contacts.sort();
				}
			}
			]
		});
		prompt.present();
	}

	editContact(contact){
		let prompt = this.alertCtrl.create({
			title: 'Edit Contact',
			inputs: [
			{
				name: 'name',
				placeholder: 'Name',
				value: contact.name
			},
			{
				name: 'tel',
				placeholder: 'Telephone',
				type: 'tel',
				value: contact.tel
			},
			{
				name: 'email',
				placeholder: 'Email',
				type: 'email',
				value: contact.email
			}
			],
			buttons: [
			{
				text: 'Cancel'
			},
			{
				text: 'Save',
				handler: data => {
					let index = this.contacts.indexOf(contact);

					if(index > -1){
						this.contacts[index] = data;
					}
				}
			}
			]
		});
		prompt.present();
	}

	deleteContact(contact){
		let index = this.contacts.indexOf(contact);
		if(index > -1){
			this.contacts.splice(index, 1);
		}
	}

	viewContact(contact){
		let prompt = this.alertCtrl.create({
			title: 'Contact',
			message: 'Name: ' + contact.name + ', Telephone: ' + contact.tel + ', Email: ' + contact.email,
			buttons: [
			{
				text: 'Okay!'
			}
			]
		});
		prompt.present();
	}

	// groupContacts(contacts){
	// 	let sortedContacts = contacts.sort();
	// 	let currentLetter = false;
	// 	let currentContacts = [];

	// 	sortedContacts.forEach((value, index) => {
	// 		if(value.charAt(0) != currentLetter){
	// 			currentLetter = value.charAt(0);
	// 			let newGroup = {
	// 				letter: currentLetter,
	// 				contacts: []
	// 			};
	// 			currentContacts = newGroup.contacts;
	// 			this.groupedContacts.push(newGroup);
	// 		} 
	// 		currentContacts.push(value);
	// 	});
	// }

}