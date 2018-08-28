import { Pagination, PaginatedResult } from './../../../shared/models/Pagination';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../../shared/services/user.service';
import { User } from './../../../shared/models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.css']
})
export class AllWorkersComponent implements OnInit {
BgAllWorkers: string;
users: User[];
user: User = JSON.parse(localStorage.getItem('user'));
genderList = [
  {value: 'male', display: 'Males'},
  {value: 'female', display: 'Females'}
];
userParams: any = {};
pagination: Pagination;

  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.BgAllWorkers = 'assets/images/BGsignin2.jpg';
    this.route.data.subscribe(data => {
        this.users = data['users'].result;
        this.pagination = data['users'].pagination;
    });

    this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99;

  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }

  resetFilters() {
    this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99;
    this.loadUsers();
  }

  loadUsers() {

    var alertify = require('alertifyjs/build/alertify.js');
    // tslint:disable-next-line:max-line-length
    this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams).subscribe((res: PaginatedResult<User[]>) => {

        this.users = res.result;
        this.pagination = res.pagination;

    }, error => {

        alertify.error(error);

    });
  }


}
