import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private firebaseService: FirebaseServiceProvider) {
    this.firebaseService.getContacts().subscribe(
      res => {
        this.items = res;
      },
      err => {
        console.log('err:', err);
      }
    );
  }

}
