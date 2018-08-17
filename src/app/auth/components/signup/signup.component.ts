import { AuthService } from '../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  backgroundImagePath: string;
  registerForm: FormGroup;


  constructor(public authService: AuthService, private router: Router) { }



  ngOnInit() {
    this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
    this.registerForm = new FormGroup({
      username: new FormControl('Hello', Validators.required),
      password: new FormControl('', [Validators.required,
                                     Validators.minLength(4),
                                     Validators.maxLength(8)]),
      confirmPassword: new FormControl('', Validators.required)
    }, this.passwordMatchValidator);
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }

  register() {
    console.log(this.registerForm.value);
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

