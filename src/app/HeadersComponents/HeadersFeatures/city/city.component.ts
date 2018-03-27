import { DataService } from './../../../data/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})

export class CityComponent implements OnInit {
BGcity: string;
showtable: boolean;
danePracownika2: Array<any> = [];
danePracownika3: Array<any> = [];
citySearching: any;
CanSearch = '1';
danePracownika: any;
Button1 = '1';



  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.BGcity = 'assets/images/BGsignin2.jpg';
  }



onPrepareToAll() {

    this.dataService.onPrepareToSyncAllDataWithDatabaseData();
    this.Button1 = '2';

}



onGenerateTableInApi() {

    let danePracownika = this.dataService.allitems;

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

}



onTrySearch(form: NgForm) {

    this.citySearching = form.value.city;
    this.CanSearch = '1';



  for (let obj of this.danePracownika2 ){
    if (obj.city == this.citySearching) {
      this.danePracownika3.push({
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
  }

}



  onSearchAgain() {

  this.danePracownika3 = [];
  this.danePracownika2 = [];
  this.danePracownika = [];

    this.dataService.resetDataOfDownloadedWorkers();

    this.showtable = false;
    this.Button1 = '1';

  }



}
