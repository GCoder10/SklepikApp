import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  photo: string;

  constructor() { }

  ngOnInit() {
    this.photo = 'assets/images/services/bg_services.png';
  }

}
