import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeductorDetailsComponent } from './deductor-details.component';

const routes: Routes = [
  {
    path: '',
    component: DeductorDetailsComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic-info',
        pathMatch: 'full'
      },
      {
        path: 'basic-info',
        loadChildren:() => import('./basic-info/basic-info.module').then(m => m.BasicInfoModule)
      },
      {
        path: 'address-login',
        loadChildren:() => import('./address-and-login/address-and-login.module').then(m => m.AddressAndLoginModule)
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeductorDetailsRoutingModule {}
