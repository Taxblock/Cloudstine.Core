import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserDialogComponent } from './add-user-dialog.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddUserDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AddUserDialogModule { }
