import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-like-list',
  templateUrl: './worker-like-list.component.html',
  styleUrls: ['./worker-like-list.component.css']
})
export class WorkerLikeListComponent implements OnInit {
BgWorkerLikeList: string;


  constructor() { }

  ngOnInit() {
      this.BgWorkerLikeList = 'assets/images/BGsignin2.jpg';
  }

}
