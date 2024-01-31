import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiblePersonInfoRoutingModule } from './responsible-person-info-routing.module';
import { ResponsiblePersonInfoComponent } from './responsible-person-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  declarations: [
    ResponsiblePersonInfoComponent
  ],
  imports: [
    CommonModule,
    ResponsiblePersonInfoRoutingModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot(),
  ]
})
export class ResponsiblePersonInfoModule { }
