/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private map: google.maps.Map;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.initMap();
  }

  private initMap() {
    const mapOptions: google.maps.MapOptions = {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

}
