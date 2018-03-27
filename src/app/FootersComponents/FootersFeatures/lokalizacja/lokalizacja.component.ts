import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-lokalizacja',
  templateUrl: './lokalizacja.component.html',
  styleUrls: ['./lokalizacja.component.css']
})
export class LokalizacjaComponent implements OnInit {

BGlokalizacja: string;
latitude: number;
longitude: number;
searchControl: FormControl;
zoom: number;
locationChosen = false;


  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {

    this.zoom = 12;
    this.latitude = 53.777634;
    this.longitude = 20.479967;

    this.BGlokalizacja = 'assets/images/BGsignin2.jpg';

    this.searchControl = new FormControl();

     this.setCurrentPosition();

     this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {

      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {

          let place: google.maps.places.PlaceResult = autocomplete.getPlace();


          if (place.geometry === undefined || place.geometry === null) {
            return;
          }


          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

  }
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }



onChoseLocation(event) {

    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;

}



lok1() {

    this.latitude = 53.754182;
    this.longitude = 20.485456;
    this.zoom = 15;
    this.locationChosen = true;
}



lok2() {

    this.latitude = 53.7771014;
    this.longitude = 20.4835347;
    this.zoom = 15;
    this.locationChosen = true;
}



lok3() {

    this.latitude = 54.0355644;
    this.longitude = 21.7720319;
    this.zoom = 17;
    this.locationChosen = true;
}



lok4() {

    this.latitude = 54.0318157;
    this.longitude = 21.7729304;
    this.zoom = 17;
    this.locationChosen = true;
}



lok5() {

    this.latitude = 53.938641;
    this.longitude = 21.5461713;
    this.zoom = 17;
    this.locationChosen = true;
}



lok6() {

    this.latitude = 53.9375014;
    this.longitude = 21.544166;
    this.zoom = 17;
    this.locationChosen = true;
}



lok7() {

    this.latitude = 54.3826835;
    this.longitude = 18.6010427;
    this.zoom = 15;
    this.locationChosen = true;
}



lok8() {

    this.latitude = 54.3773229;
    this.longitude = 18.6084529;
    this.zoom = 15;
    this.locationChosen = true;
}



lok9() {

    this.latitude = 52.2396463;
    this.longitude = 21.0313452;
    this.zoom = 15;
    this.locationChosen = true;
}



lok10() {

    this.latitude = 52.2683273;
    this.longitude = 20.9119048;
    this.zoom = 13;
    this.locationChosen = true;
}



lok11() {

    this.latitude = 50.0614252;
    this.longitude = 19.9372235;
    this.zoom = 15;
    this.locationChosen = true;
}



lok12() {

    this.latitude = 50.064294;
    this.longitude = 19.9841872;
    this.zoom = 15;
    this.locationChosen = true;
}



}
