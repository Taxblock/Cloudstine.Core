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
    path: 'user',
    loadChildren: () =>
      import('./website/user-management/user-management.module').then(
        (m) => m.userManagementModule
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
export class AppRoutingModule {}
