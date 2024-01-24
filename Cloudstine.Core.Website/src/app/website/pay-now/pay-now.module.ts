import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { PayNowRoutingModule } from './pay-now-routing.module';
import { PayNowService } from './pay-now.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PayNowRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
  ],
  providers: [PayNowService],
  exports: [NgxTinySliderModule],
})
export class PayNowModule {}
