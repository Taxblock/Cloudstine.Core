import { Routes, RouterModule } from "@angular/router";

import { TDSLayoutComponent } from "./tds-layout/tds-layout.component";


const poiRoutes: Routes = [

  {
    path: '',
    component: TDSLayoutComponent,

    children: [

      {

        path: 'dashboard',
        loadChildren: () =>
          import('./component/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),

      },
      {

        path: 'deductor-details',
        loadChildren: () =>
          import('./component/deductor-details/deductor-details.module').then(
            (m) => m.DeductorDetailsModule
          ),

      },
      
    ],
  }
];

export const POIRouting = RouterModule.forChild(poiRoutes);
