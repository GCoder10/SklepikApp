import { DataService } from '../../../data/data.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-wszyscy',
  templateUrl: './wszyscy.component.html',
  styleUrls: ['./wszyscy.component.css']
})

export class WszyscyComponent implements OnInit {
BGwszyscy: string;
danePracownika: any;
danePracownika2: Array<any> = [];
surnameSearching: string;
showtable: boolean;
Button1 = '1';



  constructor(public dataService: DataService) { }



  ngOnInit() {
    this.BGwszyscy = 'assets/images/BGsignin2.jpg';
  }



onPrepareToSyncAllDataWithDatabase() {

    this.dataService.onPrepareToSyncAllDataWithDatabaseData();
    this.Button1 = '2';

}



onShowTableWithAllWorkers() {

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

    this.showtable = true;
}



resetDataOfDownloadedAllWorkers() {

    this.danePracownika2 = [];
    this.danePracownika = [];

    this.dataService.resetDataOfDownloadedWorkers();

    this.showtable = false;
    this.Button1 = '1';
}
}
