import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthInterceptor } from './services/authInterceptor ';
import { RouteGaurd } from './services/routeGuard';

import { EnsureModuleLoadedOnceGuard } from './services/ensureModuleLoadedOnceGuard';

import { APIService } from './services/apiService';
import { AlertService } from './services/alertService';
import { CookieService } from 'ngx-cookie-service';
import { RedirectService } from './services/redirect.service';
import { LoaderService } from './services/loaderService';

// import { CoreLoadingScreenService } from "./services/loading-screen.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  declarations: [],

  exports: [],

  providers: [
    LoaderService,
    APIService,
    AlertService,
    CookieService,
   // CartService,
    RedirectService,
   // DIYRequsetService,
    RouteGaurd,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ], // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  //Ensure that CoreModule is only loaded into AppModule

  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
