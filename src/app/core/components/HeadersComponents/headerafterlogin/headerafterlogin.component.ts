import { PageNotFoundComponent } from '../../../../shared/components/page-not-found/page-not-found.component';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { AuthService } from '../../../../auth/shared/services/auth.service';


@Component({
  selector: 'app-headerafterlogin',
  templateUrl: './headerafterlogin.component.html',
  styleUrls: ['./headerafterlogin.component.css']
})
export class HeaderafterloginComponent implements OnInit {




  constructor(public authService: AuthService) { }
@Input()


  ngOnInit() {

  }

logout() {
 this.authService.logout();
}

  chechIfSomeUserIsLoggedInViaToken() {
      return this.authService.chechIfSomeUserIsLoggedInViaDownloadedToken();
  }

}
