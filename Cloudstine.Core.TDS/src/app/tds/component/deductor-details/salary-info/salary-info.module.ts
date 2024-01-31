import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryInfoRoutingModule } from './salary-info-routing.module';
import { SalaryInfoComponent } from './salary-info.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SalaryInfoComponent
  ],
  imports: [
    CommonModule,
    SalaryInfoRoutingModule,
    SharedModule
  ]
})
export class SalaryInfoModule { }
