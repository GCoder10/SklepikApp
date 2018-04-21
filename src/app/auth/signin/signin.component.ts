import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  backgroundImagePath: string;



  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.backgroundImagePath = 'assets/images/BGsignin2.jpg';

  }



  onSignIn(form: NgForm) {
    var alertify = require('alertifyjs/build/alertify.js');
    const username = form.value.username;
    const pass = form.value.pass;

    this.authService.login(username, pass).subscribe(data => {
      alertify.success('Zalogowałeś się poprawnie');
    }, error => {
      alertify.error('Niepoprawny login/hasło: ');
  });
  }
}
