import { AuthService } from '../auth.service';
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
    const email = form.value.email;
    const pass = form.value.pass;
    const username = form.value.username;
    this.authService.signup(username, pass).subscribe(() => {
      console.log('successfull');
      this.router.navigate(['/logowanie']);
    }, error => {
      window.alert('Sprobuj ponownie');
      console.log('failed');
  });
  }


}

