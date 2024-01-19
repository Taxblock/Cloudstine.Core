import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessControlRoutingModule } from './access-control-routing.module';
import { AccessControlComponent } from './access-control.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    AccessControlComponent
  ],
  imports: [
    CommonModule,
    AccessControlRoutingModule,
    SharedModule
  ]
})
export class AccessControlModule { }
