import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { LoginService } from 'app/website/login/login.service';
import { UserProfileService } from 'app/core/services/user-profile.service';
import { UserProfileRoutingModule } from './user-profile-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, UserProfileRoutingModule, SharedModule],
  providers: [UserProfileService, LoginService],
})
export class UserProfileModule {}
