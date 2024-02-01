import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TDSRETURNComponent } from './tds-return.component';

const routes: Routes = [
  {
    path: '',
    component: TDSRETURNComponent,
    children: [
      {
        path: '',
        redirectTo: 'challan',
        pathMatch: 'full'
      },
      {
        path: 'challan',
        loadChildren:() => import('./challan/challan.module').then(m => m.ChallanModule)
      },
      {
        path: 'employee',
        loadChildren:() => import('./employee/employee.module').then(m => m.EmployeeModule)
      },
      {
        path: 'review-uplaod',
        loadChildren:() => import('./review & upload/review-upload.module').then(m => m.ReviewUploadModule)
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TDSRETURNRoutingModule {}
