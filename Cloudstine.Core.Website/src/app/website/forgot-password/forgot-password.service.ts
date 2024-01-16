import { Injectable } from "@angular/core";
import { ConfigurationSettings } from "app/core/models/configuration";
import { APIService } from "app/core/services/apiService";
import { LoginModel } from "./loginModel";
import { ChangePasswordModel } from "../changePassword/ChangePasswordModel";


@Injectable({ providedIn: 'root', })
export class ForgetPasswordService {

  changePasswordURL: string = ConfigurationSettings.Authentication + "/UserCredentials/changePassword";
  verifyAccountURL: string = ConfigurationSettings.Authentication + "/UserCredentials/verifyAccount";
  resetPasswordURL: string = ConfigurationSettings.Authentication + "/UserCredentials/ResetPassword";
  VerifyOTPURL: string = ConfigurationSettings.Authentication + "/UserCredentials/verifyOTP";

  constructor(
    private apiService: APIService) {

  }

  ChangePassword(changePasswordModel: ChangePasswordModel) {
    return this.apiService.postData(this.changePasswordURL, changePasswordModel)
  }

  VerifyAccount(userName: string) {
   // return this.apiService.getData(this.verifyAccountURL + "?userName=" + userName + "")
    return this.apiService.getData(this.verifyAccountURL  + '/' + userName);
  }

  ResetPassword(loginModel: LoginModel) {
    return this.apiService.postData(this.resetPasswordURL, loginModel)
  }

  VerifyOTP(loginModel: LoginModel) {
    return this.apiService.postData(this.VerifyOTPURL, loginModel)
  }



}