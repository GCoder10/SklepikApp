import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-nas',
  templateUrl: './o-nas.component.html',
  styleUrls: ['./o-nas.component.css']
})
export class ONasComponent implements OnInit {
  BGoNas: string;

  constructor() { }

  ngOnInit() {
    this.BGoNas = 'assets/images/BGsignin2.jpg';
  }

}
