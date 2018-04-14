import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthService {

@Output()
user2: EventEmitter<any> = new EventEmitter<any>();
user: boolean;

  baseUrl = 'http://localhost:5000/api/auth';
  userToken: any;

  constructor(private router: Router,
              private http: Http
  ) { this.user = false;
  }

  private requestOptions() {

        const headers = new Headers({
          'Content-type': 'application/json'
        });
        return new RequestOptions({headers: headers});
  }



  signup(username: string, password: string) {

        const dataToSendAsJson = {username, password};
        return this.http.post(this.baseUrl + '/register', JSON.stringify(dataToSendAsJson), this.requestOptions());

  }




  login(username: string, password: string) {

    const dataToSendAsJson = {username, password};
    return this.http.post(this.baseUrl + '/login', JSON.stringify(dataToSendAsJson), this.requestOptions()).map((response: Response) => {
        const dataOfUser = response.json();
        if (dataOfUser) {

          localStorage.setItem('token', dataOfUser.tokenString);
          this.userToken = dataOfUser.tokenString;
          this.user = true;
          this.makeLoggedUserObservable();
          this.router.navigate(['/start']);
        }
     });

  }


  makeLoggedUserObservable(): Observable<any> {
      return Observable.of(this.user);
  }



  logout() {
      this.userToken = null;
      localStorage.removeItem('token');
      this.user = false;
      this.makeUserLoggedOutObservable();
      this.router.navigate(['/end']);
  }



  makeUserLoggedOutObservable(): Observable<any> {
      return Observable.of(this.user);
  }



  checkIfSomeUserIsLoggedInBySavedToken() {
    const token = localStorage.getItem('token');
    return !!token;
  }



}
