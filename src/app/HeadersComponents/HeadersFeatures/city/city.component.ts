import { DataService } from './../../../data/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../../../core/configuration.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [ConfigService],
})

export class CityComponent implements OnInit {
backgroundImagePath: string;
showTable: boolean;
dataOfAllWorkersForSearchingOperations: Array<any> = [];
dataOfSearchedWorkers: Array<any> = [];
citySearching: any;
canSearch = '1';
dataOfAllWorkers: any;
button1 = '1';

  configuration;
  columns = [
    { key: 'surname', title: 'Surname' },
    { key: 'city', title: 'City' },
    { key: 'email', title: 'Email' },
    { key: 'name', title: 'Name' },
    { key: 'pass', title: 'Pass' },
    { key: 'pesel', title: 'PESEL' },
    { key: 'street', title: 'Street' }
  ];

  constructor(public dataService: DataService) {
     this.configuration = ConfigService.config;
  }

  ngOnInit() {
    this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
  }



onPrepareToAll() {

    this.dataService.onPrepareToSyncAllDataWithDatabaseData();
    this.button1 = '2';

}



onGenerateTableInApi() {

    let dataOfAllWorkers = this.dataService.allItems;

    for (let obj of dataOfAllWorkers ){
      this.dataOfAllWorkersForSearchingOperations.push({
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
    this.canSearch = '1';



  for (let obj of this.dataOfAllWorkersForSearchingOperations ){
    if (obj.city == this.citySearching) {
      this.dataOfSearchedWorkers.push({
        city: obj.city,
        email: obj.email,
        name: obj.name,
        pass: obj.pass,
        pesel: obj.pesel,
        street: obj.street,
        surname: obj.surname
      });
    }

    this.showTable = true;
  }

}



  onSearchAgain() {

  this.dataOfSearchedWorkers = [];
  this.dataOfAllWorkersForSearchingOperations = [];
  this.dataOfAllWorkers = [];

    this.dataService.resetDataOfDownloadedWorkers();

    this.showTable = false;
    this.button1 = '1';

  }



}
