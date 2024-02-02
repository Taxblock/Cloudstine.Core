import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SapserviceComponent } from './sapservice.component';

const routes: Routes = [
  {
    path:'',
    component:SapserviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SapserviceRoutingModule { }
