import { AuthService } from './../../auth/shared/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class WorkerEditResolver implements Resolve<User> {

    constructor(private userService: UserService,
                private router: Router,
                private authService: AuthService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        var alertify = require('alertifyjs/build/alertify.js');
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                alertify.error('Problem retrieving your data');
                this.router.navigate(['/showAllWorkers']);
                return of(null);
            })
        );
    }
}
