import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private router: Router,
              public authService: AuthService
  ) { }

  ngOnInit() {

  }


 onBackToHomePage() {
    this.router.navigate(['/']);
 }


}
