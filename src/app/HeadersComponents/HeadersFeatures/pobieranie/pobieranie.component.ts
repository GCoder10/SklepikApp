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
showTable: boolean;
dataOfAllWorkersForSearchingOperations: Array<any> = [];
dataOfSearchedWorkers: Array<any> = [];
surnameSearching: any;
canSearch = '1';
dataOfAllWorkers: any;
button1 = '1';


  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.BGpobieranie = 'assets/images/BGsignin2.jpg';
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


    this.surnameSearching = form.value.surname;
    this.canSearch = '1';


  for (let obj of this.dataOfAllWorkersForSearchingOperations ){
    if (obj.surname == this.surnameSearching) {
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

        this.dataOfAllWorkersForSearchingOperations = [];
        this.dataOfSearchedWorkers = [];
        this.canSearch = '1';
        this.dataOfAllWorkers = [];
        this.dataService.resetDataOfDownloadedWorkers();
        this.showTable = false;
        this.button1 = '1';
  }


}
