import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { userManagementRoutingModule } from './user-management-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule } from 'app/shared/shared.module';
import { UserManagementService } from './user-management.service';
import { userManagementcomponent } from './user-management.component';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [userManagementcomponent, AddUserDialogComponent],
  imports: [CommonModule,SharedModule, userManagementRoutingModule, NgxTinySliderModule , LazyLoadImageModule, FormsModule ],
  providers: [UserManagementService],
  exports: [NgxTinySliderModule],
})
export class userManagementModule {}
