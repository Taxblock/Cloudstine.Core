import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FooterComponentModule } from './website/footer/footer.module';
import { NavComponentModule } from './website/nav-component/nav-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AutoLogoutService } from './core/services/autoLogout.service';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './website/user-profile/user-profile.component';
import { PayNowComponent } from './website/pay-now/pay-now.component';
import { ProductDashboardComponent } from './website/product-dashboard/product-dashboard.component';
// import { ContactUsComponent } from './website/contact-us/contact-us.component';






@NgModule({
  declarations: [AppComponent, UserProfileComponent, PayNowComponent, ProductDashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavComponentModule,
    FooterComponentModule,
    NgxTinySliderModule,
    CoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [AutoLogoutService, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
  exports: [NgxTinySliderModule],
})
export class AppModule { }
