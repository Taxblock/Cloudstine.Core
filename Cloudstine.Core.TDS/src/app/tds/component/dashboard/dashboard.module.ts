import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SanitizeHtmlPipe } from 'src/app/shared/pipe/domsanitizer.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';


import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],

  imports: [
    DashboardRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule

  ],
  providers: [],
  exports: [],
})
export class DashboardModule { }
