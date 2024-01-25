import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardRoutingModule } from './product-dashboard-routing.module';
import { ProductDashboardService } from './product-dashboard.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductDashboardRoutingModule
  ],
  providers: [ProductDashboardService],
})
export class ProductDashboardModule { }
