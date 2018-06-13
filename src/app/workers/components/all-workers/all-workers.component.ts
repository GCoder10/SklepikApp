import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.css']
})
export class AllWorkersComponent implements OnInit {
BgAllWorkers: string;

  constructor() { }

  ngOnInit() {

    this.BgAllWorkers = 'assets/images/BGsignin2.jpg';

  }

}
