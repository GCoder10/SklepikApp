import { JsonService } from './../../../json/json.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})


export class ImportComponent implements OnInit {

backgroundImagePath: string;
selectedFile = null;
fileReader = new FileReader();
obj: any;
checkIfSend: boolean = false;
allJsonItems: Array<any> = [];

// tslint:disable-next-line:no-output-on-prefix
@Output() onClick: EventEmitter<any> = new EventEmitter();


  constructor(public jsonService: JsonService
  ) {
  }



  ngOnInit() {
    this.backgroundImagePath = 'assets/images/BGsignin2.jpg';
  }



  onFileSelected(event) {

        this.selectedFile = <File>event.target.files[0];
        this.fileReader.onload = this.onReaderLoad;
        this.fileReader.readAsText(event.target.files[0]);

  }



  onReaderLoad = (event: any) => {

        var alertify = require('alertifyjs/build/alertify.js');
        this.obj = JSON.parse(event.target.result);
        console.log(this.obj);

        for (let obj of this.obj){
          this.allJsonItems.push({
               city: obj.city,
               email: obj.email,
               name: obj.name,
               pass: obj.pass,
               pesel: obj.pesel,
               street: obj.street,
               surname: obj.surname
          });
        }

        console.log(this.allJsonItems);
        this.onClick.emit(this.allJsonItems);
        alertify.message('Dane zostały przygotowane. Możesz uploadować plik JSON');

  }



  onUploadJson() {

        console.log(this.allJsonItems);

        var alertify = require('alertifyjs/build/alertify.js');
        this.allJsonItems.forEach(obj => {
        var dataToSendAsJson = {
               city: obj.city,
               email: obj.email,
               name: obj.name,
               pass: obj.pass,
               pesel: obj.pesel,
               street: obj.street,
               surname: obj.surname
        };


        this.jsonService.sendJson(dataToSendAsJson).subscribe(() => {
              alertify.success('plik JSON został uploadowany pomyślnie');
              this.checkIfSend = true;
            }, error => {
              alertify.error('Podczas wysyłania pliku JSON wystąpił błąd: ');
              alertify.error(error);
    });
  });

  }



}
