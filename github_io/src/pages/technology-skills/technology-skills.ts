import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";

@IonicPage()
@Component({
  selector: 'page-technology-skills',
  templateUrl: 'technology-skills.html',
})
export class TechnologySkillsPage {

  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private firebaseService: FirebaseServiceProvider) {
    this.firebaseService.getTechnologySkills().subscribe(
      res => {
        this.items = res;
      },
      err => {
        console.log('err:', err);
      }
    );
  }

}
