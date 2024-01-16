import { Component } from '@angular/core';
import { environment } from 'environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { AutoLogoutService } from './core/services/autoLogout.service';
import { LoaderService } from './core/services/loaderService';
import { UserProfileService } from './core/services/user-profile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TaxBlock';
  showLoader: boolean;
  showNavBar: boolean = true;
/**
	 * Constructor
	 *
	 * @param {ITRFestivalService} _itrfestivalService
	 */
  constructor(
    
    private  route : Router,
    private _userProfileService: UserProfileService,
    private _cookieService: CookieService,
    private _loaderService: LoaderService,
    
    private autoLogoutService: AutoLogoutService
  ) {
   
   
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
