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
    const email = form.value.email;
    const pass = form.value.pass;

    this.authService.login(email, pass);
  }
}
