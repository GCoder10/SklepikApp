import { UserService } from './../../../shared/services/user.service';
import { AuthService } from './../../../auth/shared/services/auth.service';
import { User } from './../../../shared/models/User';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.css']
})
export class WorkerCardComponent implements OnInit {

  @Input() user: User;

  constructor(private authService: AuthService,
              private userService: UserService) { }

  ngOnInit() {
  }

  sendLike(id: number) {
  var alertify = require('alertifyjs/build/alertify.js');

      this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
          alertify.success('You have liked: ' + this.user.knownAs);
      }, error => {
          alertify.error(error);
      });
  }

}
