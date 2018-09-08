import { AuthService } from './../../auth/shared/services/auth.service';
import { Message } from './../models/Message';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class MessagesResolver implements Resolve<Message[]> {
    pageNumber = 1;
    pageSize = 5;
    messageContainer = 'Unread';

    constructor(private userService: UserService,
                private authService: AuthService,
                private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Message[]> {
        var alertify = require('alertifyjs/build/alertify.js');
        // tslint:disable-next-line:max-line-length
        return this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer).pipe(
            catchError(error => {
                alertify.error('Problem retrieving messages');
                this.router.navigate(['/']);
                return of(null);
            })
        );
    }
}
