import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertService } from "app/core/services/alertService";
import { ForgetPasswordService } from "../forgot-password/forgot-password.service";
import { config } from "rxjs";
import { ConfigurationSettings } from "app/core/models/configuration";
import { ResponseCode } from "app/core/models/ServiceResponse.model";
import { ChangePasswordModel } from "./ChangePasswordModel";
import { UserProfileService } from "app/core/services/user-profile.service";
import { IdentityUser } from "app/shared/Model/identty-user.model";

@Component({
  selector: 'app-change-password',
  templateUrl: './changePassword.component.html',
})

export class ChangePasswordComponent implements OnInit {
  @ViewChild('changePasswordForm', { static: true }) ngForm: NgForm;
  model: any = {};
  changePasswordModel = new ChangePasswordModel();
  isValidating = false;
  returnUrl: string;
  public changePasswordForm: FormGroup;
  public passwordTextType: boolean;
  public newpasswordTextType: boolean;
  public confirmNewpasswordTextType: boolean;
  public submitted = false;
  UserData: any;
  public currentUser: IdentityUser;
  public Total: number = 0;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private forgetPasswordService: ForgetPasswordService,
    private alertService: AlertService,
    private fb: FormBuilder,
    private userProfileService: UserProfileService
  ) {

  }
  ngOnInit() {
    this.changePasswordForm
      = this.fb.group(
        {
          NewPassword: ['', [Validators.required]],
          PasswordHash: ['', [Validators.required]],
          confirmNewPassword: ['', Validators.required]
        }
      );
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "home";
    //this.resetAll();
  }

  // ChangePassword(changePasswordForm: NgForm) {
  //   this.isValidating = true;
  //   this.loginModel.UserId = this.loginModel. UserId;
  //   if (this.loginModel.newPassword == this.loginModel.confirmPassword) {
  //     this.forgetPasswordService.ChangePassword(this.loginModel).subscribe(
  //       () => {
  //         this.alertService.ShowSuccessMessage("Password changed successfully");
  //         this.isValidating = false;
  //         this.router.navigate([this.returnUrl]);
  //       },
  //       // error => {
  //       //   console.log(error);
  //       //   this.alertService.ShowWarningMessage(error.error);
  //       //   this.isValidating = false;
  //       // },
  //       // () => {
  //       // }
  //       (error:any) => {
  //         this.alertService.ShowError(error,"Failed to change password due to unknown error");
  //         this.isValidating = false;
  //       }
  //     );
  //   }
  //   else {
  //     (error:any) => {
  //       this.alertService.ShowError(error,"Please enter valid password & confirm password");
  //       this.isValidating = false;
  //     }
  //   }
  // }

  // resetAll() {
  //   this.loginModel = {};
  //   this.loginModel = {};
  //   this.loginModel.username = "";
  //   this.loginModel.PasswordHash = "";
  //   this.loginModel.newPassword = "";
  //   this.loginModel.confirmPassword = "";
  // }

  get f() {
    return this.changePasswordForm.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
  toggleNewPasswordTextType() {
    this.newpasswordTextType = !this.newpasswordTextType;
  }
  toggleConfirmNewPasswordTextType() {
    this.confirmNewpasswordTextType = !this.confirmNewpasswordTextType;
  }

 ChangePassword() {
   let resetPasswordForm = this.changePasswordForm.value
    if (this.changePasswordForm && this.changePasswordForm.valid) {
      let changePasswordModel = new ChangePasswordModel();
      changePasswordModel = this.changePasswordForm.value;
      changePasswordModel.UserId = this.userProfileService.getUserId();
      changePasswordModel.AddedBy = this.userProfileService.getUserId();
      changePasswordModel.AddedDate = new Date(Date.now());
      changePasswordModel.UpdatedBy = this.userProfileService.getUserId();
      changePasswordModel.UpdatedDate = new Date(Date.now());
      if (changePasswordModel.NewPassword == this.changePasswordForm.value.confirmNewPassword) {
        changePasswordModel.NewPassword = this.changePasswordForm.value.confirmNewPassword;
      }
      else {
        this.alertService.ShowWarningMessage("Both New and Confirm Password are not matched.");
        return;
      }
      this.forgetPasswordService.ChangePassword(changePasswordModel).subscribe(
        (result: any) => {
          result.Value;
          if (result.Value == 10004) {
            this.alertService.ShowErrorMessage("Please Enter Correct Old Password");
          }
          else {
            this.alertService.ShowSuccessMessage("password change Successfully");
            this.userProfileService.SetUserData(null);
            this.currentUser = null;
            this.Total = 0;
            this.router.navigateByUrl('/login');
          }
        },
        (error: any) => {
          this.alertService.ShowError(error, "Failed to proceed due to unknown error");

        }
      );
    }
    else {
      this.alertService.ShowErrorMessage("Validation Failed.");
    }
  }
}