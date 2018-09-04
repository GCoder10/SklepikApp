import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../../shared/services/user.service';
import { AuthService } from './../../../auth/shared/services/auth.service';
import { Pagination, PaginatedResult } from './../../../shared/models/Pagination';
import { User } from './../../../shared/models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-like-list',
  templateUrl: './worker-like-list.component.html',
  styleUrls: ['./worker-like-list.component.css']
})
export class WorkerLikeListComponent implements OnInit {
BgWorkerLikeList: string;
users: User[];
pagination: Pagination;
likesParam: string;

  constructor(private authService: AuthService,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.BgWorkerLikeList = 'assets/images/BGsignin2.jpg';
      this.route.data.subscribe(data => {
          this.users = data['users'].result;
          this.pagination = data['users'].pagination;
      });
        this.likesParam = 'Likers';
  }

  loadUsers() {

    var alertify = require('alertifyjs/build/alertify.js');
    // tslint:disable-next-line:max-line-length
    this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam).subscribe((res: PaginatedResult<User[]>) => {

        this.users = res.result;
        this.pagination = res.pagination;

    }, error => {

        alertify.error(error);

    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }

}
