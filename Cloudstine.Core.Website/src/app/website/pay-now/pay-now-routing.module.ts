import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayNowComponent } from './pay-now.component';

const routes: Routes = [
  {
    path: '',
    component: PayNowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayNowRoutingModule {}
