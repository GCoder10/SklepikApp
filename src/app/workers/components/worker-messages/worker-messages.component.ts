import { AuthService } from './../../../auth/shared/services/auth.service';
import { UserService } from './../../../shared/services/user.service';
import { Message } from './../../../shared/models/Message';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-worker-messages',
  templateUrl: './worker-messages.component.html',
  styleUrls: ['./worker-messages.component.css']
})
export class WorkerMessagesComponent implements OnInit {
@Input() recipientId: number;
messages: Message[];

  constructor(private userService: UserService,
              private authService: AuthService) { }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    var alertify = require('alertifyjs/build/alertify.js');
    this.userService.getMessageThread(this.authService.decodedToken.nameid, this.recipientId)
                    .subscribe(messages => {
                        this.messages = messages;
                    }, error => {
                      alertify.error(error);
                    });
  }
}
