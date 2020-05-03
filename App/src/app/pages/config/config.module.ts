// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';
import { ConfigPageRoutingModule } from './config-routing.module';

import { ConfigPage } from './config.page';

// Providers
import { LocalService } from 'src/app/services/database/local.service';

// Componentes
import { ConfigLogadoComponent } from 'src/app/components/config-logado/config-logado.component';
import { ConfigDeslogadoComponent } from 'src/app/components/config-deslogado/config-deslogado.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigPageRoutingModule,
    ComponentsModule
  ],
  entryComponents:[ConfigLogadoComponent, ConfigDeslogadoComponent],
  providers: [LocalService],
  declarations: [ConfigPage]
})
export class ConfigPageModule {}
