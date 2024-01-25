import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../core/services/alertService';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControlName,
  FormControl,
  NgForm,
} from '@angular/forms';
import { SignUpService } from './sign-up.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUpModel } from 'app/core/models/SignUpModel';
import { UserProfileService } from 'app/core/services/user-profile.service';
import { LoginService } from '../login/login.service';
import { RedirectService } from 'app/core/services/redirect.service';
import { ResponseCode } from 'app/core/models/ServiceResponse.model';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  // signUp_Form: any;
  // submitted: boolean = false;
  // pattern: string =
  //   '^[A-Za-z]{3}[PCHFATBLJGgpchfatblj]{1}[A-Za-z]{1}[0-9]{4}[A-Za-z]{1}$';
  // returnURL: string;
  // urId: string;
  // corporateName: string;
  // companyName: any;
  // OrganizationList: any;
  signUpForm: FormGroup;
  EnterOTP: any;
  isVerifyOTP: boolean = false;
  signUP: boolean = true;
  createPass: boolean = false;
  createPassForm: FormGroup;
  signUpModel = new SignUpModel();
  otp: number = 454545;
  isShake: boolean = false;
  passwordTextType: boolean = false
  repasswordTextType: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private alertService: AlertService,
    private loginService: LoginService,
    private redirectService: RedirectService,
    private route: ActivatedRoute,
    private router: Router,
    private userProfileService: UserProfileService,
    private _router: Router,
  ) {
    // this.route.queryParams.subscribe((params) => {
    //   this.returnURL = params['returnURL'];
    //   let urId = params['URID'];
    //   this.companyName = params['corporateName'];
    //   if (urId != null || urId != '') this.urId = urId;
    //   if (this.companyName != null || this.companyName != '')
    //     this.corporateName = this.companyName;
    // });
  }

  ngOnInit(): void {
    this.CreateForm();
    // this.GetDisclaimer();
  }

  // restrictNonNumericCharacters(event: KeyboardEvent): void {
  //   const input = event.target as HTMLInputElement;
  //   const inputValue = input.value;
  //   // Remove non-numeric characters
  //   input.value = inputValue.replace(/[^0-9]/g, '');
  // }
  // mustMatch(controlName: string, matchingcontrolName: string) {
  //   return (formGroup: FormGroup) => {
  //     const control = formGroup.controls[controlName];
  //     const matchingControl = formGroup.controls[matchingcontrolName];
  //     if (matchingControl.errors && !matchingControl.errors.mustMatch) {
  //       return;
  //     }
  //     if (control.value !== matchingControl.value) {
  //       matchingControl.setErrors({ mustMatch: true });
  //     } else {
  //       matchingControl.setErrors(null);
  //     }
  //   };
  // }
  // CreateForm() {
  //   this.signUpForm = this.formBuilder.group(
  //     {
  //       EmailId: new FormControl(
  //         '',
  //         Validators.compose([Validators.required, Validators.email])
  //       ),
  //       PasswordHash: new FormControl(
  //         '',
  //         Validators.compose([Validators.required, Validators.minLength(8)])
  //       ),
  //       ConfirmPassword: new FormControl('', Validators.required),
  //       PANNo: new FormControl(
  //         '',
  //         Validators.compose([
  //           Validators.required,
  //           Validators.pattern(
  //             '[A-Za-z]{3}[PCHFATBLJGgpchfatblj]{1}[A-Za-z]{1}[0-9]{4}[A-Za-z]{1}'
  //           ),
  //         ])
  //       ),
  //       MobileNo: new FormControl(
  //         '',
  //         Validators.compose([
  //           Validators.required,
  //           Validators.minLength(10),
  //           Validators.maxLength(10),
  //           Validators.pattern('^[6-9]{1}[0-9]{9}$'),
  //         ])
  //       ),
  //     },
  //     // { validator: this.mustMatch('PasswordHash', 'ConfirmPassword') }
  //   );
  //   //  this.signUp_Form = this.signUpForm.controls;
  // }
  // get f() {
  //   return this.signUpForm.controls;
  // }
  // onSignUp_Click() {
  //   this.submitted = true;
  //   if (this.signUpForm.invalid) {
  //     return;
  //   }
  //   if (this.signUpForm.valid) {
  //     this.signUpModel = this.signUpForm.value;
  //     let data = this.signUpForm.value;
  //     this.signUpModel.PANNo = data.PANNo.toUpperCase();
  //     this.signUpModel.AddedDate = new Date(Date.now());
  //     this.signUpModel.UpdatedDate = new Date(Date.now());
  //     this.signUpModel.AddedBy = this.userProfileService.getUserId();
  //     this.signUpModel.UpdatedBy = this.userProfileService.getUserId();
  //     this.signUpModel.URID = this.urId;
  //     this.signUpModel.CorporateName = this.corporateName;
  //     if (this.corporateName != undefined || this.corporateName != null) {
  //       localStorage.setItem('RecheckCorporateName', this.corporateName)
  //     } else {
  //       localStorage.setItem('RecheckCorporateName', 'corporateName')
  //     }
  //     this.signUpService.Register(this.signUpModel).subscribe(
  //       (result: any) => {
  //         this.alertService.ShowSuccessMessage('Registration Successfully');
  //         // this.alertService.NavigateToRoute('login');
  //         let serviceResponse = result.Value;
  //         this.loginService.setSession(serviceResponse);
  //         if (this.returnURL == '' || this.returnURL == null || this.returnURL == undefined) {
  //           this.alertService.NavigateToRoute('add-cart?CategoryId=' + 2);
  //         } else {
  //           window.location.href = this.redirectService.DecodeURL(
  //             this.returnURL
  //           );
  //         }
  //       },
  //       (error: any) => {
  //         this.alertService.ShowError(
  //           error,
  //           'Failed to Register due to unknown error'
  //         );
  //       }
  //     );
  //   } else {
  //     (error: any) => {
  //       this.alertService.ShowError(error, 'Validation Failed');
  //     };
  //   }
  // }
  // OnSignInClick() {
  //   if (this.companyName != undefined || this.companyName != null) {
  //     this.router.navigateByUrl('/login?corporateName=' + this.companyName);
  //   } else {
  //     this.router.navigateByUrl('/login');
  //   }
  // }
  // GetDisclaimer() {
  //   this.signUpService.GetDisclaimer().subscribe((result: any) => {
  //     let data = result.Value;
  //     this.OrganizationList = data;
  //   });
  // }




  CreateForm() {
    this.signUpForm = this.formBuilder.group({
      Name: ['', [Validators.required]],
      EmailId: ['', [Validators.required, Validators.email]],
      MobileNo: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10), Validators.maxLength(10)]]
    })
  }
  Home_Page() {
    this._router.navigate(['/home']);
  }
  onSignInClick() {
    this._router.navigate(['/login']);
  }
  onNextClick() {
    if (this.signUpForm.valid) {
      let signUpFromData = this.signUpForm.value;
      this.signUpModel.Name = signUpFromData.Name;
      this.signUpModel.EmailId = signUpFromData.EmailId;
      this.signUpModel.MobileNo = signUpFromData.MobileNo;
      this.signUpService.Register(this.signUpModel).subscribe((result: any) => {
        let serviceResponse = result.Value;
        if (serviceResponse == ResponseCode.Success) {
          this.alertService.ShowSuccessMessage('Registration Successfully');
          this.isVerifyOTP = true;
          this.signUP = false
        }
      })
      this.isVerifyOTP = true;
      this.signUP = false
    }
  }
  backToSignUp() {
    this.signUP = true
  }
  backToOTP() {
    this.isVerifyOTP = true;
    this.signUP = false
    this.createPass = false
  }
  onClickVerifyOTP() {
    if (this.EnterOTP) {
      if (this.otp == this.EnterOTP) {
        this.isVerifyOTP = false
        this.signUP = false
        this.createPass = true
      }
      else {
        this.isShake = true
        setTimeout(() => {
          this.isShake = false
        }, 300);
        this.alertService.ShowErrorMessage("Please enter correct OTP");
      }
    }
    else {
      this.isShake = true
      setTimeout(() => {
        this.isShake = false
      }, 300);
      this.alertService.ShowErrorMessage("Please enter OTP");
    }
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
  toggleRePasswordTextType() {
    this.repasswordTextType = !this.repasswordTextType;
  }
  setPassword(setPasswordForm: NgForm) {
    if (setPasswordForm && setPasswordForm.valid) {
      let password = setPasswordForm.value.password;
      let confirmPassword = setPasswordForm.value.confirmPassword;

      if (password == confirmPassword) {
        this.signUpModel.Password = password;
        this.signUpService.SetPassword(this.signUpModel).subscribe(
          (result: any) => {
            let serviceResponse = result.Value;
            if (serviceResponse.responseCode == ResponseCode.Success) {
              this.alertService.ShowSuccessMessage('Password Saved Successfully');
              this._router.navigate(['/home']);
            }
          },
        );
      }
      else {
        this.alertService.ShowErrorMessage("Password & Re-Enter Password must be matched");
      }
    }
    else {
      this.alertService.ShowErrorMessage("Please enter the given fields.");
    }
    this._router.navigate(['/product-dashboard']);
  }
}
