import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './changePassword.component';
import { ChangePasswordRoutingModule } from './changePasswordr-routing.module';
import { ForgetPasswordService } from '../forgot-password/forgot-password.service';


@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [CommonModule, ChangePasswordRoutingModule,FormsModule,ReactiveFormsModule,
    ],
  providers: [ForgetPasswordService],
})
export class ChangePasswordModule {}
