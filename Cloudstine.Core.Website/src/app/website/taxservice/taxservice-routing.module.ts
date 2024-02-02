import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxserviceComponent } from './taxservice.component';

const routes: Routes = [
  {
    path:'',
    component:TaxserviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxserviceRoutingModule { }
