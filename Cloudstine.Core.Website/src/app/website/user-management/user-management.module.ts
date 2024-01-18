import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { usermanagementRoutingModule } from './user-management-routing.module';
import { UsermanagementService } from './user-management.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { usermanagementcomponent } from './user-management.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [usermanagementcomponent],
  imports: [CommonModule,SharedModule, usermanagementRoutingModule, NgxTinySliderModule , LazyLoadImageModule ],
  providers: [UsermanagementService],
  exports: [NgxTinySliderModule],
})
export class usermanagementModule {}
