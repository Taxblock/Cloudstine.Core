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
      {

        path: 'tds-return-dashboard',
        loadChildren: () =>
          import('./component/tds-return-dashboard/tds-return-dashboard.module').then(
            (m) => m.TDSRETURNDASHBOARDModule
          ),

      },
      {

        path: 'tds-return',
        loadChildren: () =>
          import('./component/tds-return/tds-return.module').then(
            (m) => m.TDSRETURNModule
          ),

      },

    ],
  }
];

export const POIRouting = RouterModule.forChild(poiRoutes);
