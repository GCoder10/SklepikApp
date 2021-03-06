import { User } from './shared/models/User';
import { JwtHelper } from 'angular2-jwt';
import { AuthService } from './auth/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private authService: AuthService) {}

  ngOnInit() {
   const token = localStorage.getItem('token');
   const user: User = JSON.parse(localStorage.getItem('user'));
   if (token) {
     this.authService.decodedToken = this.jwtHelper.decodeToken(token);
   }
   if (user) {
     this.authService.currentUser = user;
     this.authService.changeMemberPhoto(user.photoUrl);
   }
  }

}

