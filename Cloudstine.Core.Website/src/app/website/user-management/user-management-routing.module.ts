import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userManagementcomponent } from './user-management.component';

const routes: Routes = [
  {
    path: '',
    component: userManagementcomponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        loadChildren:() => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'access-control',
        loadChildren:() => import('./access-control/access-control.module').then(m => m.AccessControlModule)
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class userManagementRoutingModule {}
