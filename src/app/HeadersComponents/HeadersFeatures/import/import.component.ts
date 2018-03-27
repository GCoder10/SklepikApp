import { JsonService } from './../../../json/json.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})


export class ImportComponent implements OnInit {

BGimport: string;
selectedFile = null;
JSONfile = null;
fileReader = new FileReader();
obj = {};
myJSON: string;


// tslint:disable-next-line:no-output-on-prefix
@Output() onClick: EventEmitter<any> = new EventEmitter();


  constructor(public jsonService: JsonService
  ) {
  }



  ngOnInit() {
    this.BGimport = 'assets/images/BGsignin2.jpg';
  }



  onFileSelected(event) {

        this.selectedFile = <File>event.target.files[0];
        this.fileReader.onload = this.onReaderLoad;
        this.fileReader.readAsText(event.target.files[0]);

  }



  onReaderLoad = (event: any) => {

        this.obj = JSON.parse(event.target.result);
        this.myJSON = JSON.stringify(this.obj);

        this.onClick.emit(this.obj);
        window.alert('Dane zostaly przygotowane. Mozesz uploadowac plik JSON');

  }



  onUpload() {

        this.jsonService.sendJSON(this.obj);

  }



}
