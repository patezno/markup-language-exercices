import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  mapsOpened: boolean;

  constructor(private geolocation: Geolocation) {
    this.mapsOpened = false;
  }

  startMaps() {
    this.mapsOpened = true;
    this.loadMap();
    this.getLocation();
  }

  async getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.setCenter(resp);
    }).catch((error) => {
      console.log(error);
    });
  }

  loadMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.getMapOptions());
  }

  setCenter(resp: Geoposition) {
    const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
    this.map.setCenter(latLng);
    this.putMarker(latLng);
  }

  putMarker(latLng: any) {
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: 'Posición actual'
    });
  }

  getMapOptions() {
    const mapOptions = {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      fullscreenControl: false,
      styles: [
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#1d2c4d'
            }
          ]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#8ec3b9'
            }
          ]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#1a3646'
            }
          ]
        },
        {
          featureType: 'administrative.country',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#4b6878'
            }
          ]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#64779e'
            }
          ]
        },
        {
          featureType: 'administrative.province',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#4b6878'
            }
          ]
        },
        {
          featureType: 'landscape.man_made',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#334e87'
            }
          ]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [
            {
              color: '#023e58'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#283d6a'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#6f9ba5'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#1d2c4d'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#023e58'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#3C7680'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#304a7d'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#98a5be'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#1d2c4d'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#2c6675'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#255763'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#b0d5ce'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#023e58'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#98a5be'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#1d2c4d'
            }
          ]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#283d6a'
            }
          ]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [
            {
              color: '#3a4762'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#0e1626'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#4e6d70'
            }
          ]
        }
      ]
    };
    return mapOptions;
  }
}
