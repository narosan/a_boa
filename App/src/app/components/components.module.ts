import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDescriptionComponent } from './event-description/event-description.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    EventDescriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EventDescriptionComponent
  ]
})
export class ComponentsModule { }
