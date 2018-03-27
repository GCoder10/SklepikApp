import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  ngOnInit() {

  //  firebase.initializeApp({
  //    apiKey: 'AIzaSyDVuKIfeknL-msuguakxrjIwLO0ohj_o0Q',
  //    authDomain: 'sklepikapp-32f5b.firebaseapp.com'
  //  });
  }

}

