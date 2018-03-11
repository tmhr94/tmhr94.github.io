import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private firebaseService: FirebaseServiceProvider) {
    this.firebaseService.getProducts().subscribe(
      res => {
        this.items = res;
      },
      err => {
        console.log('err:', err);
      }
    );
  }

}
