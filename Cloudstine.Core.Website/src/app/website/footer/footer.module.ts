import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponentRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule,FooterComponentRoutingModule],
  providers: [],
  exports: [FooterComponent],
})
export class FooterComponentModule {}


