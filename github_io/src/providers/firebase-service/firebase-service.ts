import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class FirebaseServiceProvider {

  public url: string;

  constructor(public http: HttpClient) {
    this.url = 'https://github-io-9a43a.firebaseio.com/';
  }

  getJobExperiences(): Observable<any> {
    return this.http.get(this.url + 'job_experiences.json').map(
      res => { return res; }
    );
  }
}
