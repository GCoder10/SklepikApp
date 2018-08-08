import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from './../../../shared/models/User';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {
@ViewChild('editForm') editForm: NgForm;
BgWorkerEdit: string;
user: User;
@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
  if (this.editForm.dirty) {
    $event.returnValue = true;
  }
}


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.BgWorkerEdit = 'assets/images/BGsignin2.jpg';
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }


  updateUser() {
    console.log(this.user);
    var alertify = require('alertifyjs/build/alertify.js');
    alertify.success('Profile updated successfully');
    this.editForm.reset(this.user);
  }


}
