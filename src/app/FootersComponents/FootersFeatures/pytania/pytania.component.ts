import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pytania',
  templateUrl: './pytania.component.html',
  styleUrls: ['./pytania.component.css']
})
export class PytaniaComponent implements OnInit {
question1: boolean;
question2: boolean;
question3: boolean;
question4: boolean;
question5: boolean;
question6: boolean;
question7: boolean;
question8: boolean;
question9: boolean;
question10: boolean;
question11: boolean;
question12: boolean;
question13: boolean;
backgroundImagePath: string;


  constructor() { }

  ngOnInit() {
    this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
  }

  quest1() {
    this.question1 = true;
    this.question2 = false;
    this.question3 = false;
    this.question4 = false;
    this.question5 = false;
    this.question6 = false;
    this.question7 = false;
    this.question8 = false;
    this.question9 = false;
    this.question10 = false;
    this.question11 = false;
    this.question12 = false;
    this.question13 = false;
  }

  quest2() {
    this.question1 = false;
    this.question2 = true;
    this.question3 = false;
    this.question4 = false;
    this.question5 = false;
    this.question6 = false;
    this.question7 = false;
    this.question8 = false;
    this.question9 = false;
    this.question10 = false;
    this.question11 = false;
    this.question12 = false;
    this.question13 = false;
  }

  quest3() {
    this.question1 = false;
    this.question2 = false;
    this.question3 = true;
    this.question4 = false;
    this.question5 = false;
    this.question6 = false;
    this.question7 = false;
    this.question8 = false;
    this.question9 = false;
    this.question10 = false;
    this.question11 = false;
    this.question12 = false;
    this.question13 = false;
  }

  quest4() {
    this.question1 = false;
    this.question2 = false;
    this.question3 = false;
    this.question4 = true;
    this.question5 = false;
    this.question6 = false;
    this.question7 = false;
    this.question8 = false;
    this.question9 = false;
    this.question10 = false;
    this.question11 = false;
    this.question12 = false;
    this.question13 = false;
  }

  quest5() {
    this.question1 = false;
    this.question2 = false;
    this.question3 = false;
    this.question4 = false;
    this.question5 = true;
    this.question6 = false;
    this.question7 = false;
    this.question8 = false;
    this.question9 = false;
    this.question10 = false;
    this.question11 = false;
    this.question12 = false;
    this.question13 = false;
  }

  quest6() {
    this.question1 = false;
    this.question2 = false;
    this.question3 = false;
    this.question4 = false;
    this.question5 = false;
    this.question6 = true;
    this.question7 = false;
    this.question8 = false;
    this.question9 = false;
    this.question10 = false;
    this.question11 = false;
    this.question12 = false;
    this.question13 = false;
  }

  quest7() {
    this.question1 = false;
    this.question2 = false;
    this.question3 = false;
    this.question4 = false;
    this.question5 = false;
    this.question6 = false;
    this.question7 = true;
    this.question8 = false;
    this.question9 = false;
    this.question10 = false;
    this.question11 = false;
    this.question12 = false;
    this.question13 = false;
  }

  quest8() {
    this.question1 = false;
    this.question2 = false;
    this.question3 = false;
    this.question4 = false;
    this.question5 = false;
    this.question6 = false;
    this.question7 = false;
    this.question8 = true;
    this.question9 = false;
    this.question10 = false;
    this.question11 = false;
    this.question12 = false;
    this.question13 = false;
  }

  quest9() {
    this.question1 = false;
    this.question2 = false;
    this.question3 = false;
    this.question4 = false;
    this.question5 = false;
    this.question6 = false;
    this.question7 = false;
    this.question8 = false;
    this.question9 = true;
    this.question10 = false;
    this.question11 = false;
    this.question12 = false;
    this.question13 = false;
  }

  quest10() {
    this.question1 = false;
    this.question2 = false;
    this.question3 = false;
    this.question4 = false;
    this.question5 = false;
    this.question6 = false;
    this.question7 = false;
    this.question8 = false;
    this.question9 = false;
    this.question10 = true;
    this.question11 = false;
    this.question12 = false;
    this.question13 = false;
  }

  quest11() {
    this.question1 = false;
    this.question2 = false;
    this.question3 = false;
    this.question4 = false;
    this.question5 = false;
    this.question6 = false;
    this.question7 = false;
    this.question8 = false;
    this.question9 = false;
    this.question10 = false;
    this.question11 = true;
    this.question12 = false;
    this.question13 = false;
  }

  quest12() {
    this.question1 = false;
    this.question2 = false;
    this.question3 = false;
    this.question4 = false;
    this.question5 = false;
    this.question6 = false;
    this.question7 = false;
    this.question8 = false;
    this.question9 = false;
    this.question10 = false;
    this.question11 = false;
    this.question12 = true;
    this.question13 = false;
  }

  quest13() {
    this.question1 = false;
    this.question2 = false;
    this.question3 = false;
    this.question4 = false;
    this.question5 = false;
    this.question6 = false;
    this.question7 = false;
    this.question8 = false;
    this.question9 = false;
    this.question10 = false;
    this.question11 = false;
    this.question12 = false;
    this.question13 = true;
  }
}
