import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxserviceRoutingModule } from './taxservice-routing.module';
import { TaxserviceComponent } from './taxservice.component';


@NgModule({
  declarations: [
    TaxserviceComponent
  ],
  imports: [
    CommonModule,
    TaxserviceRoutingModule
  ]
})
export class TaxserviceModule { }
