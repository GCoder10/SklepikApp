import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import database from 'firebase/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';



@Injectable()
export class AuthService {

@Output()
user2: EventEmitter<any> = new EventEmitter<any>();

  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router
  ) {
    this.user = firebaseAuth.authState;
  }


  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);

      })
      .catch(err => {
        console.log('Something went wrong:', err.message);

      });
  }



  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {

      this.user2.emit(this.user);

      setTimeout((router: Router) => {
          this.router.navigate(['/start']);
      }, 0);

     })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }





  logout() {
    this.firebaseAuth
        .auth
        .signOut()
        .then(value => {


          setTimeout((router: Router) => {
          this.router.navigate(['/end']);
          }, 0);


    this.user2.emit(this.user);
        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
        });
  }



}
