import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavComponentService } from './nav-component.service';
import { NavComponent } from './nav-component.component';
import { NavComponentRoutingModule } from './nav-component-routing.module';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, NavComponentRoutingModule],
  providers: [NavComponentService],
  exports: [NavComponent],
})
export class NavComponentModule {}
