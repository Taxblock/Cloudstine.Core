import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { AddressAndLoginComponent } from './address-and-login.component';
import { AddressAndLoginRoutingModule } from './address-and-login-routing.module';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';




@NgModule({
  declarations: [AddressAndLoginComponent],
  imports: [
    CommonModule,
    AddressAndLoginRoutingModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    SharedModule,
    FormsModule,
    FormlyModule.forRoot(),

  ]
})
export class AddressAndLoginModule { }
