import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from './loginModel';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgetPasswordService } from './forgot-password.service';
import { AlertService } from 'app/core/services/alertService';
import { UserProfileService } from 'app/core/services/user-profile.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'forgot-pass',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
 
@ViewChild('forgotPasswordForm', { static: true }) ngForm: NgForm;
submitted = false;

loginModel: LoginModel;
public userName: string;
public otp: string;
public EnterOtp :boolean = false
  UserId: any;
  UserData: any;

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private forgetPasswordService: ForgetPasswordService,
  private alertService: AlertService,
  private userService:UserProfileService) {

}

ngOnInit() {
  
  this.loginModel = new LoginModel();
}


SendOTP(forgotPasswordForm: NgForm): void {
  if (forgotPasswordForm && forgotPasswordForm.valid) {
    let userName = this.loginModel.UserName;
    this.forgetPasswordService.VerifyAccount(userName).subscribe(
      (result: any) => {
     let data = result.Value;
     this.UserData = data
        this.alertService.ShowSuccessMessage("OTP send on your register Email address");
        this.EnterOtp=true
      },
      (error:any) => {
        this.alertService.ShowError(error,"Failed to send OTP due to unknown error");

      }
    );
  }
  else {
    this.alertService.ShowErrorMessage("Validation Failed");
  }
}



ConfirmOTP(forgotPasswordForm: NgForm) {
  this.submitted = true;
  if (forgotPasswordForm && forgotPasswordForm.valid) {
    let otpData = new LoginModel();
      otpData = forgotPasswordForm.value;
      otpData.UserId =this.UserData.UserId;
      this.forgetPasswordService.VerifyOTP(otpData).subscribe(
          (result: any) => {
              result.Value;
              if(result.Value == 10004)
              {
                this.alertService.ShowErrorMessage("Please Enter Valid OTP");
                forgotPasswordForm.reset();
              }
              else
              {
              this.alertService.ShowSuccessMessage("OTP Verify Successfully");
                  this.router.navigateByUrl('/reset-password?UserId=' + this.UserData.UserId +  '&UserName=' +
                  this.UserData.
                  UserName);
              }
          },
          
          (error:any) => {
            this.alertService.ShowError(error,"Failed to proceed due to unknown error");
    
          }
      );

  }
  else {
      this.alertService.ShowErrorMessage("Validation Failed.");
  }

}

}
