import { Router } from '@angular/router';
import { DataService } from '../../../data/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-dodawanie',
  templateUrl: './dodawanie.component.html',
  styleUrls: ['./dodawanie.component.css']
})

export class DodawanieComponent implements OnInit {


backgroundImagePath: string;
selectedFile = null;
imageSrc = null;




  constructor(public dataService: DataService, private router: Router) { }



  ngOnInit() {
    this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
  }


  onSignUp(form: NgForm) {

    var alertify = require('alertifyjs/build/alertify.js');

    const name = form.value.name;
    const surname = form.value.surname;
    const city = form.value.city;

    const street = form.value.street;
    const email = form.value.email;
    const pesel = form.value.pesel;

    const pass = form.value.pass;

    this.dataService.addNewWorker(name, surname, city, street, email, pesel, pass).subscribe(() => {
      alertify.success('Dodano pracownika pomyślnie');
      this.router.navigate(['/wszyscy']);
    }, error => {
      alertify.error('Podczas dodawania wystąpił błąd: ');
      alertify.error(error);
    });

}




  onFileSelected(event) {

    this.selectedFile = <File>event.target.files[0];
    this.imageSrc = <File>event.target.files[0].result;

  }





  onUploadSelectedPhoto() {

    this.dataService.sendPhoto(this.selectedFile);

  }



}


