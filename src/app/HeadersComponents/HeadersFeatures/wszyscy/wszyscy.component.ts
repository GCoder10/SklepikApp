import { DataService } from '../../../data/data.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../core/configuration.service';

@Component({
  selector: 'app-wszyscy',
  templateUrl: './wszyscy.component.html',
  styleUrls: ['./wszyscy.component.css'],
  providers: [ConfigService],
})

export class WszyscyComponent implements OnInit {

BGwszyscy: string;
dataOfAllWorkers: any;
dataOfAllWorkers2: Array<any> = [];
surnameSearching: string;
showtable: boolean;
Button1 = '1';

  configuration;
  columns = [
    { key: 'id', title: 'ID' },
    { key: 'surname', title: 'Surname' },
    { key: 'city', title: 'City' },
    { key: 'email', title: 'Email' },
    { key: 'name', title: 'Name' },
    { key: 'pass', title: 'Pass' },
    { key: 'pesel', title: 'PESEL' },
    { key: 'street', title: 'Street' }
  ];



  constructor(public dataService: DataService
  ) {
    this.configuration = ConfigService.config;
  }


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
}



resetDataOfDownloadedAllWorkers() {

    this.dataOfAllWorkers2 = [];
    this.dataOfAllWorkers = [];

    this.dataService.resetDataOfDownloadedWorkers();

    this.showtable = false;
    this.Button1 = '1';
}
}
