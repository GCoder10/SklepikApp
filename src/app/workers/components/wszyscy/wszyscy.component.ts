import { FilterCityPipe } from '../../../shared/pipes/filter-city.pipe';
import { FilterPipe } from '../../../shared/pipes/filter.pipe';
import { DataService } from '../../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-wszyscy',
  templateUrl: './wszyscy.component.html',
  styleUrls: ['./wszyscy.component.css']
})

export class WszyscyComponent implements OnInit {

BGwszyscy: string;
dataOfAllWorkers: any;
dataOfAllWorkers2: Array<any> = [];
showtable: boolean;
Button1 = '1';
isCollapsed = true;
idChecked: number;
surnameConsoleLogTest: string;
ifCanSendToDataBase = false;
orderString = '';

max = 10;
rateByUser = 1;
isReadonlyUserRating = false;

overStar: number;
percent: number;



  constructor(public dataService: DataService
  ) { }


  ngOnInit() {

    this.BGwszyscy = 'assets/images/BGsignin2.jpg';

  }




onDownloadAllWorkersFromLocalDatabase() {

  this.dataService.onDownloadAllWorkersFromLocalDatabase();
  this.Button1 = '2';

}



onShowTableWithAllWorkers() {

    let dataOfAllWorkers = this.dataService.allWorkers;
      for (let obj of dataOfAllWorkers ){
        this.dataOfAllWorkers2.push({
          id: obj.id,
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
    this.Button1 = '3';
}



resetDataOfDownloadedAllWorkers() {

    this.dataOfAllWorkers2 = [];
    this.dataOfAllWorkers = [];

    this.dataService.resetDataOfDownloadedWorkers();

    this.showtable = false;
    this.Button1 = '1';
}



  checkId(data) {
    this.idChecked = data;
    return this.idChecked;
  }


  hoveringOver(value, data) {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
    this.surnameConsoleLogTest = data;
  }


  resetStar() {
    this.overStar = void 0;
  }


  onRateWorkerByUser(data, surname) {
     console.log('Worker with surname: ' + surname + ' Got: ' + this.rateByUser + ' stars rating');
  }


  onDeleteWorkerByIdFromDatabase(data, surname) {
     console.log('Worker with surname: ' + surname + ' and id = ' + data + ' should be deleted');
  }


  onEditSelectedWorker(data, surname) {
     console.log('Worker with surname: ' + surname + ' and id = ' + data + ' should be edited');
  }


onSort(num) {

  if (num == '1') {
    this.orderString = 'surname';
  }
  if (num == '2') {
    this.orderString = '-surname';
  }
  if (num == '3') {
    this.orderString = 'name';
  }
  if (num == '4') {
    this.orderString = '-name';
  }
  if (num == '5') {
    this.orderString = 'city';
  }
  if (num == '6') {
    this.orderString = '-city';
  }
  if (num == '7') {
    this.orderString = 'street';
  }
  if (num == '8') {
    this.orderString = '-street';
  }
  if (num == '9') {
    this.orderString = 'email';
  }
  if (num == '10') {
    this.orderString = '-email';
  }

}

}
