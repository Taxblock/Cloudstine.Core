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

  constructor(
    private apiService: APIService,
    private userProfileService: UserProfileService
  ) {}

  Register(signUpModel: SignUpModel) {
    // return this.apiService.postData();
   
    return this.apiService.postData(this.signUpURL, signUpModel);
  }
  GetDisclaimer() {
    return this.apiService.getData(this.urlGetDisclaimer);
  }
}
