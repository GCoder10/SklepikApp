import { User } from './../../../shared/models/User';
import { AuthService } from '../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  backgroundImagePath: string;
  registerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  user: User;


  constructor(public authService: AuthService,
              private router: Router,
              private fb: FormBuilder) { }



  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-red'
    };
    this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
    this.createRegisterForm();
  }


  createRegisterForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required],
      knownAs: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required,
                                Validators.minLength(4),
                                Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }


  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }


  register() {
    var alertify = require('alertifyjs/build/alertify.js');
    if (this.registerForm.valid) {
        this.user = Object.assign({}, this.registerForm.value);
        this.authService.register(this.user).subscribe(() => {
          alertify.success('Registration successful');
        }, error => {
          alertify.error(error);
        }, () => {
          this.router.navigate(['/logowanie']);
          });
        }
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

