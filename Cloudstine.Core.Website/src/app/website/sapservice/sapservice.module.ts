import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SapserviceRoutingModule } from './sapservice-routing.module';
import { SapserviceComponent } from './sapservice.component';


@NgModule({
  declarations: [
    SapserviceComponent
  ],
  imports: [
    CommonModule,
    SapserviceRoutingModule
  ]
})
export class SapserviceModule { }
