import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserProfileService } from 'app/core/services/user-profile.service';
import { ResetPasswordComponent } from './resetPassword.component';
import { ResetPasswordRoutingModule } from './resetPassword.routing.module';


@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [CommonModule, ResetPasswordRoutingModule,FormsModule],
  providers: [UserProfileService],
})
export class ResetPasswordModule {}
 