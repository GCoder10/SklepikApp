import { FilterCityPipe } from './../../../pipes/filter-city.pipe';
import { FilterPipe } from './../../../pipes/filter.pipe';
import { DataService } from '../../../data/data.service';
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
surnameSearching: string;
showtable: boolean;
Button1 = '1';
isCollapsed = true;
idChecked: number;
surnameConsoleLogTest: string;
ifCanSendToDataBase = false;

max = 10;
rate = 1;
isReadonly = false;


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


  onClickTesting(data) {
    this.surnameConsoleLogTest = data;
    console.log(this.surnameConsoleLogTest);
  }


  hoveringOver(value, data) {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
    this.surnameConsoleLogTest = data;
  }



  resetStar() {
    this.overStar = void 0;
  }



  onClickTestingDatabase() {
    console.log('Worker with surname:' + this.surnameConsoleLogTest + ' Got: ' + this.rate + ' stars rating');
  }

}
