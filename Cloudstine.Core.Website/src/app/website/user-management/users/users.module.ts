import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { usersRoutingModule } from './users-routing.module';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    usersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
