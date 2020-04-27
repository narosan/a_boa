/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private map: google.maps.Map;

  constructor(
    private geolocation: Geolocation
  ) { }

  ngOnInit() { }
  
  ionViewDidEnter() {
    this.initMap();
  }

  private async getLocation() {
    const geolocation = await this.geolocation.getCurrentPosition();
    return { lat: geolocation.coords.latitude, lng: geolocation.coords.longitude }
  }

  private async initMap() {
    const location = await this.getLocation();
    const mapOptions: google.maps.MapOptions = {
      center: location,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

}
