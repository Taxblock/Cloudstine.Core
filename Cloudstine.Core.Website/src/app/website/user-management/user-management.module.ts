import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { SharedModule } from 'app/shared/shared.module';
import { UserManagementRoutingModule } from './user-management-routing.module';



@NgModule({
  declarations: [
    UserManagementComponent
  ],
  imports: [
    CommonModule, 
    UserManagementRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserManagementModule { }
