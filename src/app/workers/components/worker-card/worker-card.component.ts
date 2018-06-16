import { User } from './../../../shared/models/User';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.css']
})
export class WorkerCardComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
