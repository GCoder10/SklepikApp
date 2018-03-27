import { DataService } from '../../../data/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-dodawanie',
  templateUrl: './dodawanie.component.html',
  styleUrls: ['./dodawanie.component.css']
})

export class DodawanieComponent implements OnInit {


BGdodawanie: string;
selectedFile = null;
imageSRC = null;
imageSRC2img: FileReader = null;



  constructor(public dataService: DataService,
              private http: HttpClient
  ) { }



  ngOnInit() {
    this.BGdodawanie = 'assets/images/BGsignin2.jpg';
  }


  onSignup(form: NgForm) {

    const name = form.value.name;
    const surname = form.value.surname;
    const city = form.value.city;

    const street = form.value.street;
    const email = form.value.email;
    const pesel = form.value.pesel;

    const pass = form.value.pass;

    this.dataService.AddNewWorker(name, surname, city, street, email, pesel, pass);

}




  onFileSelected(event) {

    this.selectedFile = <File>event.target.files[0];
    this.imageSRC = <File>event.target.files[0].result;

  }





  onUpload() {

    this.dataService.sendPhoto(this.selectedFile);

  }



}


