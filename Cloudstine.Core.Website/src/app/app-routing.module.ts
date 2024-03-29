import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'nav-component',
    loadChildren: () =>
      import('./website/nav-component/nav-component.module').then(
        (m) => m.NavComponentModule
      ),
  },
  {
    path: 'footer',
    loadChildren: () =>
      import('./website/footer/footer.module').then(
        (m) => m.FooterComponentModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./website/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./website/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./website/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },


  {
    path: 'error',
    loadChildren: () =>
      import('./website/error/error.module').then((m) => m.ErrorModule),
  },

  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./website/privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
  },

  {
    path: 'forgot-pass',
    loadChildren: () =>
      import('./website/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./website/resetPassword/resetPasswors.module').then(
        (m) => m.ResetPasswordModule
      ),
  },

  {
    path: 'change-pass',
    loadChildren: () =>
      import('./website/changePassword/changePassword.module').then(
        (m) => m.ChangePasswordModule
      ),
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('./website/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
  },

  {
    path: 'user-management',
    loadChildren: () =>
      import('./website/user-management/user-management.module').then(
        (m) => m.userManagementModule
      )
  },
  {
    path: 'transaction-history',
    loadChildren: () =>
      import('./website/transaction-history/tansaction-history.module').then(
        (m) => m.TransactionHistoryModule
      )
  },
  {
    path: 'paynow',
    loadChildren: () =>
      import('./website/pay-now/pay-now.module').then(
        (m) => m.PayNowModule
      )
  },

  {
    path: 'product-dashboard',
    loadChildren: () =>
      import('./website/product-dashboard/product-dashboard.module').then(
        (m) => m.ProductDashboardModule
      )
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./website/about/about.module').then(
        (m) => m.AboutModule
      )
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./website/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      )
  },
  {
    path: 'careers',
    loadChildren: () =>
      import('./website/careers/careers.module').then(
        (m) => m.CareersModule
      )
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./website/customer/customer.module').then(
        (m) => m.CustomerModule
      )
  },
  {
    path: 'poi',
    loadChildren: () =>
      import('./website/poi/poi.module').then(
        (m) => m.PoiModule
      )
  },
  {
    path: 'erp',
    loadChildren: () =>
      import('./website/erp/erp.module').then(
        (m) => m.ErpModule
      )
  },
  {
    path: 'cloudworkspace',
    loadChildren: () =>
      import('./website/serviceslist/serviceslist.module').then(
        (m) => m.ServiceslistModule
      )
  },
  {
    path: 'sapservice',
    loadChildren: () =>
      import('./website/sapservice/sapservice.module').then(
        (m) => m.SapserviceModule
      )
  },
  {
    path: 'taxservice',
    loadChildren: () =>
      import('./website/taxservice/taxservice.module').then(
        (m) => m.TaxserviceModule
      )
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('./website/terms/terms.module').then(
        (m) => m.TermsModule
      )
  },
  {
    path: 'digitalservices',
    loadChildren: () =>
      import('./website/digitalservices/digitalservices.module').then(
        (m) => m.DigitalservicesModule
      )
  },
  {
    path: '**',
    redirectTo: 'error', //Error 404 - Page not found
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // useHash: true,
      scrollPositionRestoration: 'top'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
