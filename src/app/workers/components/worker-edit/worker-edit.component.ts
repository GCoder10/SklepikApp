import { ActivatedRoute } from '@angular/router';
import { User } from './../../../shared/models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {
BgWorkerEdit: string;
user: User;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.BgWorkerEdit = 'assets/images/BGsignin2.jpg';
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }


}
