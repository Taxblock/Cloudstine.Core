import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userManagementcomponent } from './user-management.component';

const routes: Routes = [
  {
    path: '',
    component: userManagementcomponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class userManagementRoutingModule {}
