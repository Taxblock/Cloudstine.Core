import { Injectable } from '@angular/core';
import { LoginModel } from 'app/core/models/LoginModel';
import { IdentityUser } from '../../shared/Model/identty-user.model';
import { StateKeys } from '../../shared/Model/state-keys.model';
import { StateService } from './state-service.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { APPNames } from '../../shared/Model/app-name.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  //public
  public currentUser: Observable<IdentityUser>;

  public currentUserSubject: BehaviorSubject<IdentityUser>;

  constructor(
    private stateService: StateService,
    private cookieService: CookieService
  ) {
    this.currentUserSubject = new BehaviorSubject<IdentityUser>(
      this.stateService.getData(StateKeys.UserData)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get CurrentUserValue(): IdentityUser {
    return this.stateService.getData(StateKeys.UserData);
  }

  SetUserData(userData: IdentityUser) {
    this.stateService.SetData(StateKeys.UserData, userData);
    if (userData != undefined && userData != null) {
      this.cookieService.set(
        environment.AUTH_COOKIE_NAME,
        JSON.stringify(userData),
        { domain: environment.DOMAIN }
      );
      // if (userData.EnableBackOffice) {
      //   window.location.href = environment.CRM_APP_URL;
      // }
    } else {
      this.cookieService.delete(environment.AUTH_COOKIE_NAME,"/",environment.DOMAIN);
      this.cookieService.delete(environment.AUTH_COOKIE_NAME,"/");
    }

    this.currentUserSubject.next(userData);
    //this.postCrossDomainMessage(APPNames.CRM,environment.CRM_APP_URL,userData);
  }

  GetUserData() {
    return this.stateService.getData(StateKeys.UserData);
  }

  getUserId(): number {
    let userId: number = -1;
    if (this.CurrentUserValue) {
      userId = this.CurrentUserValue.UserId;
    }
    return userId;
  }
}
