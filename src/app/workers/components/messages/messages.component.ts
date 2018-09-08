import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../../auth/shared/services/auth.service';
import { UserService } from './../../../shared/services/user.service';
import { Pagination, PaginatedResult } from './../../../shared/models/Pagination';
import { Message } from './../../../shared/models/Message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  BgMessages: string;
  messages: Message[];
  pagination: Pagination;
  messageContainer = 'Unread';

  constructor(private userService: UserService,
              private authService: AuthService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.BgMessages = 'assets/images/BGsignin2.jpg';
    this.route.data.subscribe(data => {
      this.messages = data['messages'].result;
      this.pagination = data['messages'].pagination;
    });
  }

  loadMessages() {
    var alertify = require('alertifyjs/build/alertify.js');
    // tslint:disable-next-line:max-line-length
    this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer)
                    .subscribe((res: PaginatedResult<Message[]>) => {
                      this.messages = res.result;
                      this.pagination = res.pagination;
                    }, error => {
                      alertify.error(error);
                    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadMessages();
  }


}
