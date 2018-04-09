import { Injectable, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';
import database from 'firebase/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { RequestOptions, Http } from '@angular/http';


@Injectable()
export class DataService {

    items: Array<any> = [];
    arrayForAllChildNames: Array<any> = [];
    allItems: Array<any> = [];
    allWorkers: any;
    imageUrl: any;


constructor(private router: Router,
            private http: Http
) { }



addNewWorker(name: string, surname: string, city: string, street: string, email: string, pesel: number, pass: string) {
  //  var database = firebase.database().ref().child('pracownicy/' + surname);

    var newData = {
        name: name,
        surname: surname,
        city: city,
        street: street,
        email: email,
        pesel: pesel,
        pass: pass
    };

    var payload = JSON.stringify(newData);

    let url = 'https://sklepikapp-32f5b.firebaseio.com/pracownicy';
    let headers = new HttpHeaders({
       'Content-Type': 'application/json',
    });


    console.log('Pracownik został pomyślnie dodany do bazy danych');
  //  this.router.navigate(['/']);
    return this.http.post(url, payload)
    .catch(err => {
        console.log(err);
        return Observable.of(err);
    });

    //  database.push(newData);

}



sendPhoto(file) {

      var storageRef = firebase.storage().ref('pracownicy/' + file.name);
      storageRef.put(file);

}





getWorkersfromDatabase(SurnameWorker) {

  var database = firebase.database().ref('pracownicy/' + SurnameWorker);

  database.orderByValue().on('value', (snapshot) => {
           snapshot.forEach((snap) => {
               this.items.push({
                city: snap.val().city,
                email: snap.val().email,
                name: snap.val().name,
                pass: snap.val().pass,
                pesel: snap.val().pesel,
                street: snap.val().street,
                surname: snap.val().surname
            });
            return false;
            });

  });
this.makeWorkersDataObservable();
}





makeWorkersDataObservable(): Observable<any> {

      window.alert('Tablica z danymi została przygotowana poprawnie');
      return Observable.of(this.items);

}






resetWorkersSearching() {

    this.items = [];

}



onDownloadAllWorkersFromLocalDatabase() {
        this.http.get('http://localhost:5000/api/values').subscribe(response => {
            console.log(response);
           this.allWorkers = response.json();
        });
       this.makeAllDataOfWorkersFromLocalDatabaseObservable();
}
makeAllDataOfWorkersFromLocalDatabaseObservable(): Observable<any> {

      window.alert('Tablica z danymi została przygotowana poprawnie');
      return Observable.of(this.allWorkers);

}




getAllDataOfWorkers() {

    this.arrayForAllChildNames.forEach((item) => {

    var database = firebase.database().ref('pracownicy/').child(item.key);
        database.orderByValue().on('value', (snapshot) => {
          snapshot.forEach((snap) => {
                this.allItems.push({
                city: snap.val().city,
                email: snap.val().email,
                name: snap.val().name,
                pass: snap.val().pass,
                pesel: snap.val().pesel,
                street: snap.val().street,
                surname: snap.val().surname
                });
            return false;
          });
        });
    });
this.makeAllDataOfWorkersObservable();
}





makeAllDataOfWorkersObservable(): Observable<any> {

      window.alert('Tablica z danymi została przygotowana poprawnie');
      return Observable.of(this.allItems);

}




resetDataOfDownloadedWorkers() {

    this.allItems = [];
    this.arrayForAllChildNames = [];

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

