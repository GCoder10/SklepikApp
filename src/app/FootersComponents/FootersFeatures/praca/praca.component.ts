import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-praca',
  templateUrl: './praca.component.html',
  styleUrls: ['./praca.component.css']
})
export class PracaComponent implements OnInit {
BGpraca: string;



  constructor() { }



  ngOnInit() {
    this.BGpraca = 'assets/images/BGsignin2.jpg';
  }



}
