import { DataService } from './../../../data/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
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



  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
  }



onPrepareToAll() {

    this.dataService.onDownloadAllWorkersFromLocalDatabase();
    this.button1 = '2';
}



onGenerateTableInApi() {

    let dataOfAllWorkers = this.dataService.allWorkers;

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
    this.button1 = '3';
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
