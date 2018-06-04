import { AuthService } from '../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  backgroundImagePath: string;



  constructor(public authService: AuthService, private router: Router) { }



  ngOnInit() {
    this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
  }



  onSignUp(form: NgForm) {

    var alertify = require('alertifyjs/build/alertify.js');
    const email = form.value.email;
    const pass = form.value.pass;
    const username = form.value.username;
    this.authService.signup(username, pass).subscribe(() => {
      alertify.success('Rejestracja przebiegła pomyślnie');
      this.router.navigate(['/logowanie']);
    }, error => {
      alertify.error('Podczas rejestracji wystąpił błąd: ');
      alertify.error(error);
  });

  }


}

