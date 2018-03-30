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


backgroundImagePath: string;
selectedFile = null;
imageSrc = null;




  constructor(public dataService: DataService,
              private http: HttpClient
  ) { }



  ngOnInit() {
    this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
  }


  onSignUp(form: NgForm) {

    const name = form.value.name;
    const surname = form.value.surname;
    const city = form.value.city;

    const street = form.value.street;
    const email = form.value.email;
    const pesel = form.value.pesel;

    const pass = form.value.pass;

    this.dataService.addNewWorker(name, surname, city, street, email, pesel, pass);

}




  onFileSelected(event) {

    this.selectedFile = <File>event.target.files[0];
    this.imageSrc = <File>event.target.files[0].result;

  }





  onUploadSelectedPhoto() {

    this.dataService.sendPhoto(this.selectedFile);

  }



}


