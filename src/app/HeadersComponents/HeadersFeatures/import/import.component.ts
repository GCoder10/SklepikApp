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
obj = {};
myJson: string;
checkIfSend: boolean = false;

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
        this.myJson = JSON.stringify(this.obj);

        this.onClick.emit(this.myJson);
        alertify.message('Dane zostaly przygotowane. Mozesz uploadowac plik JSON');

  }



  onUploadJson() {

        var alertify = require('alertifyjs/build/alertify.js');

        this.jsonService.sendJson(this.myJson).subscribe(() => {
              alertify.success('plik JSON zostal uploadowany pomyslnie');
              this.checkIfSend = true;
            }, error => {
              alertify.error('Podczas wysylania pliku JSON wystapil blad: ');
              alertify.error(error);

  });

  }

}
