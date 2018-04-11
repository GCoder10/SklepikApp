import { DataService } from '../../../data/data.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pobieranie',
  templateUrl: './pobieranie.component.html',
  styleUrls: ['./pobieranie.component.css']
})

export class PobieranieComponent implements OnInit {

BGpobieranie: string;
showtable: boolean;
danePracownika2: Array<any> = [];
surnameSearching: any;
CanSearch = '1';
danePracownika: any;


  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.BGpobieranie = 'assets/images/BGsignin2.jpg';
  }



  showWorkersInTable() {
  let danePracownika = this.dataService.items;

  for (let obj of danePracownika ){
  this.danePracownika2.push({
    city: obj.city,
    email: obj.email,
    name: obj.name,
    pass: obj.pass,
    pesel: obj.pesel,
    street: obj.street,
    surname: obj.surname
  });
  }



  this.showtable = true;
  this.CanSearch = '0';
  }




  onTrySearch(form: NgForm) {

      this.surnameSearching = form.value.surname;
      this.dataService.getWorkersfromDatabase(this.surnameSearching);
      this.CanSearch = '1';

  }




  onSearchAgain() {

        this.danePracownika2 = [];
        this.CanSearch = '1';
        this.danePracownika = [];
        this.dataService.resetWorkersSearching();
        this.showtable = false;

  }


}
