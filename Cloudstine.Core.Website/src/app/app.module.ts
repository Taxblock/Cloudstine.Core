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




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavComponentModule,
    FooterComponentModule,
    NgxTinySliderModule,
    CoreModule,
    //SharedModule,
   
 
    ToastrModule.forRoot(),
  ],
  providers: [AutoLogoutService,{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent],
  exports: [NgxTinySliderModule],
})
export class AppModule {}
