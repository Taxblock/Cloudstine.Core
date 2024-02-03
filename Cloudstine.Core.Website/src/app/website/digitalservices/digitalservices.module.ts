import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalservicesRoutingModule } from './digitalservices-routing.module';
import { DigitalservicesComponent } from './digitalservices.component';


@NgModule({
  declarations: [
    DigitalservicesComponent
  ],
  imports: [
    CommonModule,
    DigitalservicesRoutingModule
  ]
})
export class DigitalservicesModule { }
