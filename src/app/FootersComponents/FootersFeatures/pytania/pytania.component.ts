import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pytania',
  templateUrl: './pytania.component.html',
  styleUrls: ['./pytania.component.css']
})
export class PytaniaComponent implements OnInit {
pytanie1: boolean;
pytanie2: boolean;
pytanie3: boolean;
pytanie4: boolean;
pytanie5: boolean;
pytanie6: boolean;
pytanie7: boolean;
pytanie8: boolean;
pytanie9: boolean;
pytanie10: boolean;
pytanie11: boolean;
pytanie12: boolean;
pytanie13: boolean;
BGpytania: string;


  constructor() { }

  ngOnInit() {
    this.BGpytania = 'assets/images/BGsignin2.jpg';
  }

  pyt1() {
    this.pytanie1 = true;
    this.pytanie2 = false;
    this.pytanie3 = false;
    this.pytanie4 = false;
    this.pytanie5 = false;
    this.pytanie6 = false;
    this.pytanie7 = false;
    this.pytanie8 = false;
    this.pytanie9 = false;
    this.pytanie10 = false;
    this.pytanie11 = false;
    this.pytanie12 = false;
    this.pytanie13 = false;
  }

  pyt2() {
    this.pytanie1 = false;
    this.pytanie2 = true;
    this.pytanie3 = false;
    this.pytanie4 = false;
    this.pytanie5 = false;
    this.pytanie6 = false;
    this.pytanie7 = false;
    this.pytanie8 = false;
    this.pytanie9 = false;
    this.pytanie10 = false;
    this.pytanie11 = false;
    this.pytanie12 = false;
    this.pytanie13 = false;
  }

  pyt3() {
    this.pytanie1 = false;
    this.pytanie2 = false;
    this.pytanie3 = true;
    this.pytanie4 = false;
    this.pytanie5 = false;
    this.pytanie6 = false;
    this.pytanie7 = false;
    this.pytanie8 = false;
    this.pytanie9 = false;
    this.pytanie10 = false;
    this.pytanie11 = false;
    this.pytanie12 = false;
    this.pytanie13 = false;
  }

  pyt4() {
    this.pytanie1 = false;
    this.pytanie2 = false;
    this.pytanie3 = false;
    this.pytanie4 = true;
    this.pytanie5 = false;
    this.pytanie6 = false;
    this.pytanie7 = false;
    this.pytanie8 = false;
    this.pytanie9 = false;
    this.pytanie10 = false;
    this.pytanie11 = false;
    this.pytanie12 = false;
    this.pytanie13 = false;
  }

  pyt5() {
    this.pytanie1 = false;
    this.pytanie2 = false;
    this.pytanie3 = false;
    this.pytanie4 = false;
    this.pytanie5 = true;
    this.pytanie6 = false;
    this.pytanie7 = false;
    this.pytanie8 = false;
    this.pytanie9 = false;
    this.pytanie10 = false;
    this.pytanie11 = false;
    this.pytanie12 = false;
    this.pytanie13 = false;
  }

  pyt6() {
    this.pytanie1 = false;
    this.pytanie2 = false;
    this.pytanie3 = false;
    this.pytanie4 = false;
    this.pytanie5 = false;
    this.pytanie6 = true;
    this.pytanie7 = false;
    this.pytanie8 = false;
    this.pytanie9 = false;
    this.pytanie10 = false;
    this.pytanie11 = false;
    this.pytanie12 = false;
    this.pytanie13 = false;
  }

  pyt7() {
    this.pytanie1 = false;
    this.pytanie2 = false;
    this.pytanie3 = false;
    this.pytanie4 = false;
    this.pytanie5 = false;
    this.pytanie6 = false;
    this.pytanie7 = true;
    this.pytanie8 = false;
    this.pytanie9 = false;
    this.pytanie10 = false;
    this.pytanie11 = false;
    this.pytanie12 = false;
    this.pytanie13 = false;
  }

  pyt8() {
    this.pytanie1 = false;
    this.pytanie2 = false;
    this.pytanie3 = false;
    this.pytanie4 = false;
    this.pytanie5 = false;
    this.pytanie6 = false;
    this.pytanie7 = false;
    this.pytanie8 = true;
    this.pytanie9 = false;
    this.pytanie10 = false;
    this.pytanie11 = false;
    this.pytanie12 = false;
    this.pytanie13 = false;
  }

  pyt9() {
    this.pytanie1 = false;
    this.pytanie2 = false;
    this.pytanie3 = false;
    this.pytanie4 = false;
    this.pytanie5 = false;
    this.pytanie6 = false;
    this.pytanie7 = false;
    this.pytanie8 = false;
    this.pytanie9 = true;
    this.pytanie10 = false;
    this.pytanie11 = false;
    this.pytanie12 = false;
    this.pytanie13 = false;
  }

  pyt10() {
    this.pytanie1 = false;
    this.pytanie2 = false;
    this.pytanie3 = false;
    this.pytanie4 = false;
    this.pytanie5 = false;
    this.pytanie6 = false;
    this.pytanie7 = false;
    this.pytanie8 = false;
    this.pytanie9 = false;
    this.pytanie10 = true;
    this.pytanie11 = false;
    this.pytanie12 = false;
    this.pytanie13 = false;
  }

  pyt11() {
    this.pytanie1 = false;
    this.pytanie2 = false;
    this.pytanie3 = false;
    this.pytanie4 = false;
    this.pytanie5 = false;
    this.pytanie6 = false;
    this.pytanie7 = false;
    this.pytanie8 = false;
    this.pytanie9 = false;
    this.pytanie10 = false;
    this.pytanie11 = true;
    this.pytanie12 = false;
    this.pytanie13 = false;
  }

  pyt12() {
    this.pytanie1 = false;
    this.pytanie2 = false;
    this.pytanie3 = false;
    this.pytanie4 = false;
    this.pytanie5 = false;
    this.pytanie6 = false;
    this.pytanie7 = false;
    this.pytanie8 = false;
    this.pytanie9 = false;
    this.pytanie10 = false;
    this.pytanie11 = false;
    this.pytanie12 = true;
    this.pytanie13 = false;
  }

  pyt13() {
    this.pytanie1 = false;
    this.pytanie2 = false;
    this.pytanie3 = false;
    this.pytanie4 = false;
    this.pytanie5 = false;
    this.pytanie6 = false;
    this.pytanie7 = false;
    this.pytanie8 = false;
    this.pytanie9 = false;
    this.pytanie10 = false;
    this.pytanie11 = false;
    this.pytanie12 = false;
    this.pytanie13 = true;
  }
}
