import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  BGrules: string;

  constructor() { }

  ngOnInit() {
  this.BGrules = 'assets/images/BGsignin2.jpg';
  }

}
