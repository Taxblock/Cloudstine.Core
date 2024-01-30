import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { AddressAndLoginComponent } from './address-and-login.component';
import { AddressAndLoginRoutingModule } from './address-and-login-routing.module';




@NgModule({
  declarations: [AddressAndLoginComponent],
  imports: [
    CommonModule,
    AddressAndLoginRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AddressAndLoginModule { }
