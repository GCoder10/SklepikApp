import { environment } from './../../../../environments/environment';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import * as firebase from 'firebase';
import database from 'firebase/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class JsonService {

    newJsonObj: string;
    baseUrl = environment.apiUrl;

constructor(private router: Router,
            private http: Http
) { }

  private requestOptions() {

        const headers = new Headers({
          'Content-type': 'application/json'
        });
        return new RequestOptions({headers: headers});

  }


  private handleError(error: any) {

    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {
      return Observable.throw(applicationError);
    }
    const serverError = error.json();
    let modelStateErrors = '';
    if (serverError) {
      for (const key in serverError) {
        if (serverError[key]) {
          modelStateErrors += serverError[key] + '\n';
        }
      }
    }
    return Observable.throw(
      modelStateErrors || 'Server error'
    );

  }



  sendJson(file) {

    var dataToSendAsJson = file;

     // tslint:disable-next-line:max-line-length
     return this.http.post(this.baseUrl + 'workers/addNewWorkers', JSON.stringify(dataToSendAsJson), this.requestOptions()).catch(this.handleError);

  }



    getJson() {

    }



    makeJsonStringObservable()/*: Observable<any>*/ {

    }



}
