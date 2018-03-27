import { DataService } from '../../../data/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
BGphoto: string;
surnameSearching: any;
CanSearch = '1';
daneZdjecia: any;


  constructor(public dataService: DataService) { }


  ngOnInit() {
     this.BGphoto = 'assets/images/BGsignin2.jpg';
  }



  onTrySearch(form: NgForm) {

      this.surnameSearching = form.value.surname;
      this.dataService.getPhotoOfWorkerFromDatabase(this.surnameSearching);
      this.CanSearch = '1';

  }



  ShowPhoto() {

    this.daneZdjecia = this.dataService.ImageUrl;
    this.CanSearch = '0';

  }



  onSearchAgain() {

    this.daneZdjecia = null;
    this.CanSearch = '1';
    this.dataService.resetPhotoSearching();

  }

}
