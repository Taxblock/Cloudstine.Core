import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../core/services/alertService';
import { LoginModel } from 'app/core/models/LoginModel';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { RedirectService } from 'app/core/services/redirect.service';
import { environment } from 'environments/environment';
import { ResponseCode } from 'app/core/models/ServiceResponse.model';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  signInForm: FormGroup;
  signIn_Form: any;
  submitted = false;
  loginModel = new LoginModel();
  returnURL: string = '';
  companyName: any;
  urId: string;
  corporateName: string;
  IsFromCorporateClientLandingPage: any = false;
  IsCheckOut: any;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private redirectService: RedirectService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.returnURL = params['returnURL'];
      let urId = params['URID'];
      this.IsCheckOut = params['Checkout']
      this.companyName = params['corporateName'];
      if (urId != null || urId != '')
        this.urId = urId;

      if (this.companyName != null || this.companyName != '')
        this.corporateName = this.companyName;
    });
  }

  ngOnInit(): void {
    this.CreateForm();
    this.IsFromCorporateClientLandingPage = localStorage.getItem('IsFromCorporateLandingPage');
    console.log('login page: ' + this.companyName);
  }

  CreateForm() {
    this.signInForm = this.formBuilder.group({
      email: [''],
      password: [''],
      rememberMe: [''],
    });
    this.signIn_Form = this.signInForm.controls;
  }

  onSignIn_Click() {
    this.submitted = true;
    if (this.signInForm.valid) {
      let signInFormData = this.signInForm.value;
      if (
        isNaN(parseInt(signInFormData.userId)) ||
        signInFormData.userName == null ||
        signInFormData.userName == undefined
      ) {
      } else {
        this.alertService.ShowErrorMessage('Validation Failed.');
      }
      this.loginModel.userName = signInFormData.email;
      this.loginModel.email = signInFormData.email;
      this.loginModel.passwordHash = signInFormData.password;
      this.loginModel.rememberMe = false;
      this.loginModel.mobileNo = '';
      this.loginModel.newPassword = '';
      this.loginModel.oTP = '';
      this.loginModel.phoneNo = '';
      this.loginModel.userId = 0;
      this.loginModel.CorporateName = this.corporateName;
      this.loginModel.URID = this.urId;
      if(this.corporateName != undefined || this.corporateName != null){
        localStorage.setItem('RecheckCorporateName', this.corporateName)
      }else{
        localStorage.setItem('RecheckCorporateName', 'corporateName')
      }
      this.loginService.Login(this.loginModel).subscribe(
        (result: any) => {
          let serviceResponse = result.Value;
          if(serviceResponse==ResponseCode.InvalidUserNameOrPassword)
          {
            this.alertService.ShowErrorMessage('Invalid UserName Or Password')
          }
          else
          {
              this.loginService.setSession(serviceResponse);
              if (serviceResponse.EnableBackOffice) {
                  window.location.href = environment.CRM_APP_URL;
              }
              else {
                  if (this.returnURL == '' || this.returnURL == null) {

                      if (serviceResponse.IsServicePresent == 'true') {
                          window.location.href = environment.CLIENT_APP_URL + 'dashboard';
                      } else {
                          this.alertService.NavigateToRoute('services');
                      }
                  } else {
                    if(this.IsCheckOut == 'true'){
                      window.location.href = this.redirectService.DecodeURL(this.returnURL)
                    }else{
                      window.location.href = this.redirectService.DecodeURL(
                        this.returnURL
                    );
                    }
                    
                  }
              }
          }

          
        },
        (error: any) => {
          this.alertService.ShowError(error, 'Invalid User Name And Password');
        }
      );
    }
  }

  onSignUpClick() {
    if (this.companyName != undefined || this.companyName != null) {
      this.router.navigateByUrl(
        '/sign-up?corporateName=' + this.companyName
        // this.redirectService.EncodeURL(window.location.href)
      );
    }
    else {
      let route = 'sign-up';
      if (this.returnURL != null) {
        route += '?returnURL=' + this.returnURL;
      }
      this.router.navigateByUrl(route);
    }
  }
}
