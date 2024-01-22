import { Component, NgZone } from '@angular/core';
import { environment } from 'environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { AutoLogoutService } from './core/services/autoLogout.service';
import { LoaderService } from './core/services/loaderService';
import { UserProfileService } from './core/services/user-profile.service';
import { Router,ActivatedRoute,Event, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TaxBlock';
  showLoader: boolean;
  showNavBar: boolean = true;
  hidenavandfooter: boolean = false;
  routepath:string
  /**
     * Constructor
     *
     * @param {ITRFestivalService} _itrfestivalService
     */
  constructor(

    private route: Router,
    private _userProfileService: UserProfileService,
    private _cookieService: CookieService,
    private _loaderService: LoaderService,
    private routes: ActivatedRoute,
    private autoLogoutService: AutoLogoutService,
    private location: Location,
    private zone: NgZone
  ) {

    // this.route.events.subscribe((event: Event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.routepath = event.url;
    //     console.log('path::::::::::::',this.routepath);
    //     if (this.routepath == '/login') {
    //       this.showNavBar = false;
    //     } else {
    //       this.showNavBar = true;
    //      // this.route.navigateByUrl('error')
    //     }
    //   }
    // });
   
  

   

  }
  ngOnInit() {
   
   

    this._loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
    this.CheckAuthentication();
  }
  CheckAuthentication() {
    var userData = this._cookieService.get(environment.AUTH_COOKIE_NAME);
    if (userData) {
      this._userProfileService.currentUserSubject.next(JSON.parse(userData));
    } else {
      this._userProfileService.SetUserData(null);
    }
  }
}
