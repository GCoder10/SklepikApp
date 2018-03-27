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
  BG: string;
  BG2: string;



  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.BG = 'assets/images/BGsignin.jpg';
    this.BG2 = 'assets/images/BGsignin2.jpg';

  }

    onSignin(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.pass;

    this.authService.login(email, pass);
  }
}
