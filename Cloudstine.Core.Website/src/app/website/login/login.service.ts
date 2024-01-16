import { Injectable } from '@angular/core';
import { APIService } from '../../core/services/apiService';
import { StateService } from '../../core/services/state-service.service';
import { StateKeys } from '../../shared/Model/state-keys.model';
import { UserProfileService } from 'app/core/services/user-profile.service';
import { IdentityUser } from 'app/shared/Model/identty-user.model';

@Injectable()
export class LoginService {

    tokenValid: boolean;
    constructor(private apiService: APIService,private userProfileService : UserProfileService) { }

    loginURL: string = "/Authentication/Account/login";
    logOutURL: string = "/Account/LogOut";
    changePasswordURL: string = "/Account/ChangePassword";
    forgotPasswordURL: string = "/Account/ForgotPassword/";

    Login(loginModel: any ) {
        return this.apiService.postData(this.loginURL, loginModel);
    }
    
    LogOff(UserID: number) {
                 return this.apiService.getData(this.logOutURL + "?UserID=" + UserID)       
    }

    setSession(authResult:IdentityUser) {
       this.userProfileService.SetUserData(authResult);    
    }

    ChangePassword(loginModel: any) {
        return this.apiService.postData(this.changePasswordURL, loginModel);
    }

    ForgotPassword(loginModel: any) {      
            return this.apiService.postData(this.forgotPasswordURL, loginModel);
     }
}


