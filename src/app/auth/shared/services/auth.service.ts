import { User } from './../../../shared/models/User';
import { environment } from './../../../../environments/environment';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class AuthService {


  baseUrl = environment.apiUrl;
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelper = new JwtHelper();
  currentUser: User;
  photoUrl = new BehaviorSubject<string>('../../assets/user.png');
  currentPhotoUrl = this.photoUrl.asObservable();


  constructor(private router: Router,
              private http: Http
  ) { }

  private requestOptions() {

        const headers = new Headers({
          'Content-type': 'application/json'
        });
        return new RequestOptions({headers: headers});

  }


  private handleError(error: any) {

    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {
      return Observable.throw(applicationError);
    }
    const serverError = error.json();
    let modelStateErrors = '';
    if (serverError) {
      for (const key in serverError) {
        if (serverError[key]) {
          modelStateErrors += serverError[key] + '\n';
        }
      }
    }
    return Observable.throw(
      modelStateErrors || 'Server error'
    );

  }


  changeMemberPhoto(photoUrl: string) {
    this.photoUrl.next(photoUrl);
  }


  signup(username: string, password: string) {

        const dataToSendAsJson = {username, password};
        // tslint:disable-next-line:max-line-length
        return this.http.post(this.baseUrl + 'auth/register', JSON.stringify(dataToSendAsJson), this.requestOptions()).catch(this.handleError);

  }

  register(user: User) {

        // const dataToSendAsJson = {user};
        // tslint:disable-next-line:max-line-length
        return this.http.post(this.baseUrl + 'auth/register', user, this.requestOptions()).catch(this.handleError);

  }


  login(username: string, password: string) {

    const dataToSendAsJson = {username, password};
    // tslint:disable-next-line:max-line-length
    return this.http.post(this.baseUrl + 'auth/login', JSON.stringify(dataToSendAsJson), this.requestOptions()).map((response: Response) => {
        const dataOfUser = response.json();
        if (dataOfUser) {

          localStorage.setItem('token', dataOfUser.tokenString);
          localStorage.setItem('user', JSON.stringify(dataOfUser.user));
          this.decodedToken = this.jwtHelper.decodeToken(dataOfUser.tokenString);
          this.currentUser = dataOfUser.user;
          this.userToken = dataOfUser.tokenString;
          this.changeMemberPhoto(this.currentUser.photoUrl);
          this.router.navigate(['/start']);
        }
     }).catch(this.handleError);

  }



  logout() {
      var alertify = require('alertifyjs/build/alertify.js');
      this.userToken = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.decodedToken = null;
      this.currentUser = null;
      alertify.success('Wylogowales sie poprawnie');
      this.router.navigate(['/end']);
  }



  chechIfSomeUserIsLoggedInViaDownloadedToken() {
      return tokenNotExpired('token');
  }


}
