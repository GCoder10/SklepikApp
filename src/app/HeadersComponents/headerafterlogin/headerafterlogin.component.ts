import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth/auth.service';


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

}
