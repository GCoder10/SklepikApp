import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-praca',
  templateUrl: './praca.component.html',
  styleUrls: ['./praca.component.css']
})
export class PracaComponent implements OnInit {
backgroundImagePath: string;



  constructor() { }



  ngOnInit() {
    this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
  }



}
