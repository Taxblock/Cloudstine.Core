import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceslistRoutingModule } from './serviceslist-routing.module';
import { ServiceslistComponent } from './serviceslist.component';


@NgModule({
  declarations: [
    ServiceslistComponent
  ],
  imports: [
    CommonModule,
    ServiceslistRoutingModule
  ]
})
export class ServiceslistModule { }
