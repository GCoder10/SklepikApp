import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {



  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    var alertify = require('alertifyjs/build/alertify.js');
    if (this.authService.chechIfSomeUserIsLoggedInViaDownloadedToken()) {
      return true;
    }

    alertify.error('Musisz być zalogowany, aby przejść do tej strony');
    this.router.navigate(['/logowanie']);
    return false;
  }


}
