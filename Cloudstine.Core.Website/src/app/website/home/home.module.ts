import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NgxTinySliderModule , LazyLoadImageModule ],
  providers: [HomeService],
  exports: [NgxTinySliderModule],
})
export class HomeModule {}
