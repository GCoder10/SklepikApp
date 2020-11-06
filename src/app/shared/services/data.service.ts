import { environment } from './../../../environments/environment';
import { Injectable, Output, EventEmitter } from '@angular/core';
import * as firebase from '@firebase/app';
import database from '@firebase/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { RequestOptions, Http, Headers } from '@angular/http';


@Injectable()
export class DataService {

    items: Array<any> = [];
    allItems: Array<any> = [];
    allWorkers: any;
    imageUrl: any;
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



addNewWorker(name: string, surname: string, city: string, street: string, email: string, pesel: number, pass: string) {

    var newData = {name, surname, city, street, email, pesel, pass};

        // tslint:disable-next-line:max-line-length
        return this.http.post(this.baseUrl + 'workers/addNewWorkers', JSON.stringify(newData), this.requestOptions()).catch(this.handleError);

}



sendPhoto(file) {

      var storageRef = firebase.storage().ref('pracownicy/' + file.name);
      storageRef.put(file);

}



onDownloadAllWorkersFromLocalDatabase() {
        this.http.get(this.baseUrl + 'workers').subscribe(response => {
           this.allWorkers = response.json();
        });
       this.makeAllDataOfWorkersFromLocalDatabaseObservable();
}
makeAllDataOfWorkersFromLocalDatabaseObservable(): Observable<any> {

      var alertify = require('alertifyjs/build/alertify.js');
      alertify.success('Tablica z danymi została przygotowana poprawnie');
      return Observable.of(this.allWorkers);

}



resetDataOfDownloadedWorkers() {

    this.allWorkers = [];
    var alertify = require('alertifyjs/build/alertify.js');
    alertify.message('Dane zostały zresetowane poprawnie');

}



getPhotoOfWorkerFromDatabase(SurnameWorker) {

    firebase.storage().ref().child('pracownicy/' + SurnameWorker + '.png').getDownloadURL().then((url) => {
        this.imageUrl = url;
    });
    this.makeObservablePhoto();

}



makeObservablePhoto(): Observable<any> {

          window.alert('Zdjęcie jest już gotowe do wyświetlenia');
          return Observable.of(this.imageUrl);

}




resetPhotoSearching() {

    this.imageUrl = null;

}



}

