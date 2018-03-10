import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseServiceProvider {

  constructor(public http: HttpClient) {
    this.url = 'https://github-io-9a43a.firebaseio.com/';
  }

}
