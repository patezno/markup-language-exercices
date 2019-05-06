import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef;
  map: any;
  latitud: any;
  longitud: any;
  currentLatitud: any;
  currentLongitud: any;

  constructor(private geolocation: Geolocation) {}

  ngOnInit() {
   this.showMap();
  }

  showMap() {
    // Location
    const location = new google.maps.LatLng(51.507351, -0.127758);

    // Map options
    const options = {
      center: location,
      zoom: 10,
      streetViewControl: false
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  // getLocation() {
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     this.latitud = resp.coords.latitude;
  //     this.longitud = resp.coords.longitude;
  //   });
  //   const watch = this.geolocation.watchPosition();
  //   watch.subscribe((data) => {
  //     this.currentLatitud = data.coords.latitude;
  //     this.currentLongitud = data.coords.longitude;
  //   });
  // }
}
