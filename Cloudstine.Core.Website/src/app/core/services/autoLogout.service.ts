import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { AlertService } from './alertService';
import { UserProfileService } from './user-profile.service';

const MINUTES_UNITL_AUTO_LOGOUT = 10; // in mins
const CHECK_INTERVAL = 10000; // in ms
const STORE_KEY = 'lastAction';

@Injectable()
export class AutoLogoutService {
  public getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
  }

  public setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }

  constructor(
    private router: Router,
    private _userProfileService: UserProfileService,
    private alertService: AlertService
  ) {
    console.log('object created');
    // this.check();
     this.initListener();
     this.initInterval();
  }

  initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover', () => this.reset());
    document.body.addEventListener('mouseout', () => this.reset());
    document.body.addEventListener('keydown', () => this.reset());
    document.body.addEventListener('keyup', () => this.reset());
    document.body.addEventListener('keypress', () => this.reset());
  }

  reset() {
    this.setLastAction(Date.now());
  }

  initInterval() {
    setInterval(() => {
      this.check();
    }, CHECK_INTERVAL);
  }

  check() {
    let now = Date.now();
    let timeleft =
      this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    let diff = timeleft - now;
    // if (diff > 40000 && diff < 60000) {
    //   this.alertService.ShowWarningMessage('You Are Now Logout in 1 min');
    // }
    let isTimeout: boolean = false
        isTimeout = diff < 0;

    if (isTimeout == true) {
      this._userProfileService.SetUserData(null);
     // window.location.href = environment.DOMAIN;
     localStorage.setItem('IsFromCorporateLandingPage','false');
     this.router.navigateByUrl('/login')
    }
  }
}
