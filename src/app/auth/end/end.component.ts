import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }



  onBackToHomePage() {
    this.router.navigate(['/']);
  }


}
