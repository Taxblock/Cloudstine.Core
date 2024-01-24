import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { usersRoutingModule } from './users-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    usersRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UsersModule { }
