import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessControlRoutingModule } from './access-control-routing.module';
import { AccessControlComponent } from './access-control.component';
import { SharedModule } from 'app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccessControlComponent
  ],
  imports: [
    CommonModule,
    AccessControlRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AccessControlModule { }
