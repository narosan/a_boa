import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDescriptionComponent } from './event-description/event-description.component';
import { ConfigLogadoComponent } from './config-logado/config-logado.component';
import { ConfigDeslogadoComponent } from './config-deslogado/config-deslogado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginProviderService } from '../services/api/login-provider.service';
import { ToastService } from '../services/toast.service';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    EventDescriptionComponent,
    ConfigLogadoComponent,
    ConfigDeslogadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EventDescriptionComponent,
    ConfigLogadoComponent,
    ConfigDeslogadoComponent
  ],
  providers: [LoginProviderService, ToastService]
})
export class ComponentsModule { }
