import { AuthService } from '../../../../auth/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerlogged',
  templateUrl: './headerlogged.component.html',
  styleUrls: ['./headerlogged.component.css']
})
export class HeaderloggedComponent implements OnInit {
user: boolean;

  constructor(public authService: AuthService) {

  }

  ngOnInit() {

  }


  chechIfSomeUserIsLoggedInViaToken() {
      return this.authService.chechIfSomeUserIsLoggedInViaDownloadedToken();
  }


}
