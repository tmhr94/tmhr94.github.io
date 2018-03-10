import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";

@IonicPage()
@Component({
  selector: 'page-job-experiences',
  templateUrl: 'job-experiences.html',
})
export class JobExperiencesPage {

  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private firebaseService: FirebaseServiceProvider) {
    this.firebaseService.getJobExperiences().subscribe(
      res => {
        this.items = res;
      },
      err => {
        console.log('err:', err);
      }
    );
  }

}
