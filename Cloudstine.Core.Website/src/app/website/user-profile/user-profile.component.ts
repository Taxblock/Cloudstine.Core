import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'app/core/services/alertService';
import { UserProfile } from './userprofile.model';
import { UserProfileService } from './user-profile.service';
import { AddressSelectList } from 'app/core/models/address-select-list.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  PersonalInfoForm: FormGroup;
  BillingInfo: FormGroup;
  Billing_Info: any;
  PersonalInfo_Form: any;
  submitted: boolean;
  userprofile = new UserProfile();
  addressSelectList: AddressSelectList = new AddressSelectList();
  isFormValid:boolean=true;

  constructor(private formBuilder: FormBuilder,
   private alertService:AlertService,
   private userProfileService: UserProfileService

    ) {}

  ngOnInit(): void {
    this.CreateForm();
  }
  CreateForm() {
    this.PersonalInfoForm = this.formBuilder.group({
      UserId:['', [Validators.required]],
      Name:['', [Validators.pattern("^[a-zA-Z ]*$"),Validators.required],],
      MobileNo: ['', [Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)]],
      EmailId:['', [Validators.required, Validators.email]],

    });
    this.PersonalInfo_Form = this.PersonalInfoForm.controls;
    this.BillingInfo = this.formBuilder.group({
      GSTINNO:['', [Validators.required,Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$")
    ]],
      PANNO: ['', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(
          "[A-Za-z]{3}[PCHFATBLJGgpchfatblj]{1}[A-Za-z]{1}[0-9]{4}[A-Za-z]{1}"
        ),
      ],],
      OrganisationName:['', [Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      FlatDoor:['', [Validators.required]],
      BuildingName:['', [Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      RoadStreet:['', [Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      AreaLocality:['', [Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
      City:['', [Validators.required]], 
      PINCode: ['', [Validators.required]],      
      StateId:['', [Validators.required]],
      IsGSTInvoiceRequired:['', [Validators.required]],
    });
    this.Billing_Info = this.BillingInfo.controls;
  }
  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
  getStateList() {
    this.userProfileService.getStateNameList().subscribe(
      (result: any) => {
        this.addressSelectList.stateList = result.Value;
      },
      (error: any) => {
        this.alertService.ShowErrorMessage(error.error);
      }
    );
  }
  onPincodeFocusOut(e: any) {
    let pincode = e.target.value;
    if (pincode.length == "6") {
      this.isFormValid=true;
    }
    else {
      this.isFormValid=false; 
      this.alertService.ShowWarningMessage('PinCode must be 6 Digits.');
      return;
    }
  }
  SaveUserProfileData() {
    this.submitted = true;
    if (this.PersonalInfoForm.valid) {
      let bilinginfo = this.BillingInfo.value;
      let data = this.PersonalInfoForm.value;
      this.userprofile.UserId = data.UserId;
      this.userprofile.Name = data.name;
      this.userprofile.MobileNo = data.MobileNo;
      this.userprofile.EmailId = data.EmailId;
      this.userprofile.GSTINNO = bilinginfo.GSTINNO;
      this.userprofile.PANNO = bilinginfo.PANNO;
      this.userprofile.OrganisationName = bilinginfo.OrganisationName;
      this.userprofile.FlatDoor = bilinginfo.FlatDoor;
      this.userprofile.BuildingName = bilinginfo.BuildingName;
      this.userprofile.RoadStreet = bilinginfo.RoadStreet;
      this.userprofile.AreaLocality = bilinginfo.AreaLocality;
      this.userprofile.City = bilinginfo.City;
      this.userprofile.PINCode = bilinginfo.PINCode;
      this.userprofile.IsGSTInvoiceRequired = bilinginfo.IsGSTInvoiceRequired;


      if (isNaN(parseInt(data.UserId)) || this.userprofile.UserId == null || this.userprofile.UserId == undefined) {
        this.userprofile.UserId = 0;
      }
      this.userProfileService.SaveUserProfileData(this.userprofile).subscribe(
        (result: any) => {
          let serviceResponse = result.Value;
          this.alertService.ShowSuccessMessage("User Profile save Successfully");
          this.ResetForm();
        },
        (error: any) => {
          this.alertService.ShowError(error, "Failed to save due to Service error");
        }
      );
    }
  } 
  ResetForm() {
    this.submitted = false;
    this.PersonalInfoForm.reset();
    this.BillingInfo.reset();

  }
}
