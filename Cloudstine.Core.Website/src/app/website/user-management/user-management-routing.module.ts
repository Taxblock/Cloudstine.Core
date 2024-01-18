import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usermanagementcomponent } from './user-management.component';

const routes: Routes = [
  {
    path: '',
    component: usermanagementcomponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class usermanagementRoutingModule {}
