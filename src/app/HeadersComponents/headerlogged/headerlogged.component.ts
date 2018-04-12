import { AuthService } from './../../auth/auth.service';
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



}
