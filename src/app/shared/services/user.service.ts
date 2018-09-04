import { PaginatedResult } from './../models/Pagination';
import { Observable } from 'rxjs/Observable';
import { User } from './../models/User';
import { RequestOptions, Headers, Http } from '@angular/http';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
    baseUrl = environment.apiUrl;

constructor(private http: Http,
            private httpClient: HttpClient) {}

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


    getUsers(page?, itemsPerPage?, userParams?): Observable<PaginatedResult<User[]>> {

    const paginatedResult: PaginatedResult<User[]> = new PaginatedResult<User[]>();
    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
        params = params.append('pageNumber', page);
        params = params.append('pageSize', itemsPerPage);
    }

    if (userParams != null) {
        params = params.append('minAge', userParams.minAge);
        params = params.append('maxAge', userParams.maxAge);
        params = params.append('gender', userParams.gender);
        params = params.append('orderBy', userParams.orderBy);
    }

    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
    });
        return this.httpClient.get<User[]>(this.baseUrl + 'users', { observe: 'response', params, headers })
                              .pipe(
                                    map(response => {
                                    paginatedResult.result = response.body;
                                    if (response.headers.get('Pagination') != null) {
                                        paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
                                    }
                                    return paginatedResult;
                                    })
                              );
    }

    getUser(id): Observable<User> {
        return this.http.get(this.baseUrl + 'users/' + id, this.jwt())
                        .map(response => <User>response.json())
                        .catch(this.handleError);
    }

    updateUser(id: number, user: User) {
        return this.http.put(this.baseUrl + 'users/' + id, user, this.jwt());
    }

    setMainPhoto(userId: number, id: number) {
        return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {}, this.jwt());
    }

    deletePhoto(userId: number, id: number) {
        return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + id, this.jwt());
    }

    sendLike(id: number, recipientId: number) {
        return this.http.post(this.baseUrl + 'users/' + id + '/like/' + recipientId, {}, this.jwt());
    }

    private jwt() {
        let token = localStorage.getItem('token');
        if (token) {
            let headers = new Headers({
                'Authorization': 'Bearer ' + token
            });
            headers.append(
                'Content-type', 'application/json'
            );
            return new RequestOptions({headers: headers});
        }
    }

}
