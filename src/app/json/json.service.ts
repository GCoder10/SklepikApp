import { Injectable, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';
import database from 'firebase/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class JsonService {

    ArrayForJSONSurnames: Array<any> = [];
    ArrayForAllJSONChildNames: Array<any> = [];
    allJSONitems: Array<any> = [];
    newJSONObj: string;

constructor(private router: Router) { }



  sendJSON(file) {

      Object.keys(file).map((obj) =>
      this.ArrayForJSONSurnames.push({
                city: file[obj].city,
                email: file[obj].email,
                name: file[obj].name,
                pass: file[obj].pass,
                pesel: file[obj].pesel,
                street: file[obj].street,
                surname: file[obj].surname
      }),
      );
      this.onNextStepinSENDINGjson();

  }



  onNextStepinSENDINGjson() {

        this.ArrayForJSONSurnames.forEach((obj) => {
        var database = firebase.database().ref().child('pracownicy/' + obj.surname);

    var newData = {
        name: obj.name,
        surname: obj.surname,
        city: obj.city,
        street: obj.street,
        email: obj.email,
        pesel: obj.pesel,
        pass: obj.pass

    };

    database.push(newData);
        });

        window.alert('Wyslano pomyslnie');
        this.ArrayForJSONSurnames = [];

  }



    getJSON() {

       var database = firebase.database().ref('pracownicy/');
        database.on('value', (snapshot) => {
            snapshot.forEach((snap) => {
            this.ArrayForAllJSONChildNames.push({
            key: snap.key
            });
            return false;
            });
        });
        this.onNextStepinGETTINGjson();
    }


    onNextStepinGETTINGjson() {

        this.ArrayForAllJSONChildNames.forEach((item) => {
        var database = firebase.database().ref('pracownicy/').child(item.key);
        database.orderByValue().on('value', (snapshot) => {
           snapshot.forEach((snap) => {


                this.allJSONitems.push({
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
this.onBeforeLastStepinGETTINGjson();
    }


    onBeforeLastStepinGETTINGjson() {

          this.newJSONObj = JSON.stringify(this.allJSONitems);
          this.makeJSONSTRINGobservable();

    }



    makeJSONSTRINGobservable(): Observable<any> {

        window.alert('Plik JSON gotowy do pobrania');
        return Observable.of(this.newJSONObj);

    }



}
