/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { mapsStyle } from 'src/app/utils/maps-style';
import { EnderecoProviderService } from 'src/app/services/api/endereco-provider.service';
import Endereco from 'src/app/model/Endereco';
import { ModalController } from '@ionic/angular';
import { EventDescriptionComponent } from 'src/app/components/event-description/event-description.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private map: google.maps.Map;

  constructor(
    private geolocation: Geolocation,
    private enderecoProvider: EnderecoProviderService,
    private modalCtrl: ModalController
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
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: mapsStyle
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    await this.setMarkersToMap();
  }

  private async setMarkersToMap() {
    const addresses = (await this.getEvents()) as Endereco[];
    for (const address of addresses) {
      const marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: {
          lat: address.latitude,
          lng: address.longitude
        },
        map: this.map
      });
      google.maps.event.addDomListener(marker, 'click', () => this.openMarker(address));
    }

  }

  private async openMarker(address) {
    const modal = this.modalCtrl.create({
      component: EventDescriptionComponent,
      componentProps: {
        evento: address
      }
    });
    (await modal).present();
  }

  private async getEvents() {
    try {
      return await this.enderecoProvider.getAll();
    } catch (err) {
      console.error('erro request ::'+err)
    }
  }

}
