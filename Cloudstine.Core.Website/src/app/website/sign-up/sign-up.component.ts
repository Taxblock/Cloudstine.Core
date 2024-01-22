import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '../../core/services/alertService';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControlName,
  FormControl,
} from '@angular/forms';
import { SignUpService } from './sign-up.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUpModel } from 'app/core/models/SignUpModel';
import { UserProfileService } from 'app/core/services/user-profile.service';
import { LoginService } from '../login/login.service';
import { RedirectService } from 'app/core/services/redirect.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  signUp_Form: any;
  submitted: boolean = false;
  pattern: string =
    '^[A-Za-z]{3}[PCHFATBLJGgpchfatblj]{1}[A-Za-z]{1}[0-9]{4}[A-Za-z]{1}$';
  signUpModel = new SignUpModel();
  returnURL: string;
  urId: string;
  corporateName: string;
  companyName: any;
  OrganizationList: any;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private alertService: AlertService,
    private loginService: LoginService,
    private redirectService: RedirectService,
    private route: ActivatedRoute,
    private router:Router,
    private userProfileService: UserProfileService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.returnURL = params['returnURL'];

      let urId = params['URID'];
      this.companyName = params['corporateName'];

      if (urId != null || urId != '') this.urId = urId;

      if (this.companyName != null || this.companyName != '')
        this.corporateName = this.companyName;
    });

    
  }

  ngOnInit(): void {
    this.CreateForm();
    this.GetDisclaimer();
  }

  restrictNonNumericCharacters(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    
    // Remove non-numeric characters
    input.value = inputValue.replace(/[^0-9]/g, '');
  }
  mustMatch(controlName: string, matchingcontrolName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingcontrolName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  CreateForm() {
    this.signUpForm = this.formBuilder.group(
      {
        EmailId: new FormControl(
          '',
          Validators.compose([Validators.required, Validators.email])
        ),
        PasswordHash: new FormControl(
          '',
          Validators.compose([Validators.required, Validators.minLength(8)])
        ),
        ConfirmPassword: new FormControl('', Validators.required),
        PANNo: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(
              '[A-Za-z]{3}[PCHFATBLJGgpchfatblj]{1}[A-Za-z]{1}[0-9]{4}[A-Za-z]{1}'
            ),
          ])
        ),
        MobileNo: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern('^[6-9]{1}[0-9]{9}$'),
          ])
        ),
      },
      { validator: this.mustMatch('PasswordHash', 'ConfirmPassword') }
    );

    this.signUp_Form = this.signUpForm.controls;
  }

  get f() {
    return this.signUpForm.controls;
  }
  onSignUp_Click() {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }

    if (this.signUpForm.valid) {
      this.signUpModel = this.signUpForm.value;
      let data = this.signUpForm.value;
      this.signUpModel.PANNo = data.PANNo.toUpperCase();
      this.signUpModel.AddedDate = new Date(Date.now());
      this.signUpModel.UpdatedDate = new Date(Date.now());
      this.signUpModel.AddedBy = this.userProfileService.getUserId();
      this.signUpModel.UpdatedBy = this.userProfileService.getUserId();
      this.signUpModel.URID = this.urId;
      this.signUpModel.CorporateName = this.corporateName;
      if(this.corporateName != undefined || this.corporateName != null){
        localStorage.setItem('RecheckCorporateName', this.corporateName)
      }else{
        localStorage.setItem('RecheckCorporateName', 'corporateName')
      }
      this.signUpService.Register(this.signUpModel).subscribe(
        (result: any) => {
          this.alertService.ShowSuccessMessage('Registration Successfully');
          // this.alertService.NavigateToRoute('login');
         
          let serviceResponse = result.Value;
          this.loginService.setSession(serviceResponse);
          if (this.returnURL == '' || this.returnURL == null || this.returnURL == undefined) {
            this.alertService.NavigateToRoute('add-cart?CategoryId=' + 2);
          } else {
            window.location.href = this.redirectService.DecodeURL(
              this.returnURL
            );
          }
        },
        (error: any) => {
          this.alertService.ShowError(
            error,
            'Failed to Register due to unknown error'
          );
        }
      );
    } else {
      (error: any) => {
        this.alertService.ShowError(error, 'Validation Failed');
      };
    }
  }

  OnSignInClick(){
    if(this.companyName != undefined || this.companyName !=null){
      this.router.navigateByUrl('/login?corporateName=' +this.companyName);
    }else{
      this.router.navigateByUrl('/login');
    }
  }

  GetDisclaimer() {
    this.signUpService.GetDisclaimer().subscribe((result: any) => {
      let data = result.Value;
      this.OrganizationList = data;
    });
  }
}
