import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from 'ag-grid-community';
import { DigitalservicesComponent } from './digitalservices.component';

const routes: Routes = [
  {
    path: '',
    component: DigitalservicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalservicesRoutingModule { }
