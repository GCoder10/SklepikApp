import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class WorkerListResolver implements Resolve<User[]> {

    constructor(private userService: UserService,
                private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        var alertify = require('alertifyjs/build/alertify.js');
        return this.userService.getUsers().pipe(
            catchError(error => {
                alertify.error('Problem retrieving data');
                this.router.navigate(['/']);
                return of(null);
            })
        );
    }
}
