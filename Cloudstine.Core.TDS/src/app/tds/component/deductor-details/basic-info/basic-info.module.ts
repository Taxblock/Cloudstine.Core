import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { BasicInfoComponent } from './basic-info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BasicInfoRoutingModule } from './basic-info-routing.module';



@NgModule({
  declarations: [BasicInfoComponent],
  imports: [
    CommonModule,
    BasicInfoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class BasicInfoModule { }
