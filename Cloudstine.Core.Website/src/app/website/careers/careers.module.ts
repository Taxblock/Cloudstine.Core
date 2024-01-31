import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CareersComponent
  ],
  imports: [
    CommonModule,
    CareersRoutingModule,
    FormsModule
  ]
})
export class CareersModule { }
