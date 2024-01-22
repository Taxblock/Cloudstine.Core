import { Injectable } from '@angular/core';
import { ConfigurationSettings } from 'app/core/models/configuration';
import { SignUpModel } from 'app/core/models/SignUpModel';
import { APIService } from 'app/core/services/apiService';
import { UserProfileService } from 'app/core/services/user-profile.service';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  signUpURL: string = '/Authentication/Account/registration';
  urlGetDisclaimer: string = '/Masters/EmployeeMaster/search-organization';
  setPasswordURL: string = ''
  constructor(
    private apiService: APIService,
    private userProfileService: UserProfileService
  ) { }

  Register(signUpModel: SignUpModel) {
    let a = JSON.stringify(signUpModel)
    console.log("-------------This SignUpMODEL ---------------" + a);
    return this.apiService.postData(this.signUpURL, signUpModel);
  }
  GetDisclaimer() {
    return this.apiService.getData(this.urlGetDisclaimer);
  }
  SetPassword(signUpModel: SignUpModel) {
    let b = JSON.stringify(signUpModel)
    console.log("==========Create PAssword============"+b);
    return this.apiService.postData(this.setPasswordURL, signUpModel);
  }
}
