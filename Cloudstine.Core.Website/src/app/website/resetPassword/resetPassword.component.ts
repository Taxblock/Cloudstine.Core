import { Component, ViewChild } from '@angular/core';
import { ForgetPasswordService } from '../forgot-password/forgot-password.service';
import { Subscription } from "rxjs";
import { LoginModel } from '../forgot-password/loginModel';
import { AlertService } from 'app/core/services/alertService';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'reset-password',
  templateUrl: './resetPassword.component.html',
  styleUrls: ['./resetPassword.component.scss'],
})

export class ResetPasswordComponent {
  @ViewChild('resetPasswordForm', { static: true }) ngForm: NgForm;

  private subscription: Subscription;
  public title: string = 'Reset Password';

  loginModel = new LoginModel();
  newPassword: string = "";
  confirmNewPassword: string = "";
  passwordHash: string = "";
  hideOldPassword: boolean = true;
  hideNewPassword: boolean = false;
  hideConfirmPassword: boolean = false;
  public UserId: number = 0;
  public UserName: string ;
  passwordTextType:boolean=true;
  NewPasswordTextType:boolean=true;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private forgetPasswordService: ForgetPasswordService) { }

  ngOnInit() { 
 
    this.route.queryParams.subscribe(params => {
      this.UserId = params['UserId'];
      this.UserName = params['UserName'];
  })

  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ResetPassword(resetPasswordForm: NgForm) {
    if (resetPasswordForm && resetPasswordForm.valid) {
      let loginModel = new LoginModel();
      loginModel.UserId =this.UserId;
      loginModel.Email = this.UserName;
      loginModel.NewPassword = this.newPassword;


      if (this.newPassword == this.passwordHash) {
        loginModel.NewPassword = this.newPassword;
      }
      else {
        this.alertService.ShowErrorMessage("Both New and Confirm Password are not matched.");
        return;
      }
      this.forgetPasswordService.ResetPassword(loginModel).subscribe(
        (result: any) => {
           result.Value;
           this.alertService.ShowSuccessMessage("Password Reset Successfully.");
           this.router.navigateByUrl('/login')
        },
        (error:any) => {
          this.alertService.ShowError(error,"Failed to Reset password due to unknown error");
  
        }
      );
    }
    else {
      this.alertService.ShowErrorMessage("validationError");
    }
  }
  toggleRePasswordTextType() {
    this.hideNewPassword = !this.hideNewPassword;
  }
}