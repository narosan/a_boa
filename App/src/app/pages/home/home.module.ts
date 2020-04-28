import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { ComponentsModule } from 'src/app/components/components.module';

// Service
import { Geolocation } from "@ionic-native/geolocation/ngx";

// Providers
import { EnderecoProviderService } from 'src/app/services/api/endereco-provider.service';
import { EventDescriptionComponent } from 'src/app/components/event-description/event-description.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [HomePage],
  entryComponents: [EventDescriptionComponent],
  providers: [Geolocation, EnderecoProviderService]
})
export class HomePageModule {}
