import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  backgroundImagePath: string;



  constructor(public authService: AuthService) { }



  ngOnInit() {
    this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
  }



  onSignUp(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.pass;
    const user = form.value.user;
    this.authService.signup(email, pass);
  }
}

