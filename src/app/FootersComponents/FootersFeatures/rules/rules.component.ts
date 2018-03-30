import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  backgroundImagePath: string;

  constructor() { }

  ngOnInit() {
  this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
  }

}
