import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-responsible-person-info',
  templateUrl: './responsible-person-info.component.html',
  styleUrls: ['./responsible-person-info.component.scss']
})
export class ResponsiblePersonInfoComponent implements OnInit {
  form = new FormGroup({});
  PreviousEmployementSalaryModel = {}
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.setParameter();
  }

  setParameter() {
    this.fields = [
      // {
      //   template: '<div class="row mb-4"><div class="col-md-12"><label class="form-label"> DEDUCTORS ADDRESS </label> </div> </row>'
      // },
      {
        fieldGroupClassName: 'row card-body p-2',
        key: 'ITDPreEmploymentSalModel',
        fieldGroup: [
          {
            className: 'col-md-3',
            type: 'input',
            key: 'name',
            props: {
              placeholder: 'Enter Name',
              required: true,
              type: 'text',
              label: "Name",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:this.previousEmployement.previousEmployement[2].
              // investmentColumnTypeName
            },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'panNo',
            props: {
              placeholder: 'PAN',
              required: true,
              type: 'text',
              label: "PAN",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee)
              // label: this.previousEmployement.previousEmployement[0].
              // investmentColumnTypeName
            },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'designation',
            props: {
              placeholder: 'Designation',
              required: true,
              type: 'text',
              label: "Designation",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              maxLength: 10,
              // label:  this.previousEmployement.previousEmployement[7].
              // investmentColumnTypeName
              // attributes: {
              //   style: 'text-transform: uppercase',
              //   maxlength: 10
              // }
            },
            // validators: {
            //   ip: {
            //     expression: (c: AbstractControl) => !c.value || /[A-Za-z]{4}[0-9]{5}[A-Za-z]{1}/.test(c.value),
            //     message: (error: any, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a valid Tan`,
            //   },
            // },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'road',
            hide: true,
            templateOptions: {
              // label: this.previousEmployement.previousEmployement[4].
              // investmentColumnTypeName,
              label: "Road/Street/Lane",
              placeholder: 'Enter address',
              required: true,
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
            },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'mobileNo',
            props: {
              placeholder: 'Enter mobile number',
              required: true,
              type: 'text',
              label: "Mobile No",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[10].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'emailId',
            props: {
              placeholder: 'Enter Email Id',
              required: true,
              type: 'text',
              label: "Email Id",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[8].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-6',
            type: 'input',
            key: 'pinCode',
            hide: true,
            props: {
              placeholder: 'Enter PIN',
              required: true,
              label: "PIN Code",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[9].
              // investmentColumnTypeName
            }
          },
        ],
      },
      {
        template: '<div class="row mb-4"><div class="col-md-12"><label class="form-label"> Address Same as Deductor </label> </div> </row>'
      },
      {
        fieldGroupClassName: 'row card-body p-2',
        key: 'ITDPreEmploymentSalModel',
        fieldGroup: [
          {
            className: 'col-md-3',
            type: 'input',
            key: 'flatNo',
            props: {
              placeholder: '',
              required: true,
              type: 'text',
              label: "Flat No./Door No.",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee)
              // label: this.previousEmployement.previousEmployement[0].
              // investmentColumnTypeName
            },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'buildingName',
            props: {
              placeholder: 'Enter building Name',
              required: true,
              type: 'text',
              label: "Premises/Building Name",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              maxLength: 10,
              // label:  this.previousEmployement.previousEmployement[7].
              // investmentColumnTypeName
              attributes: {
                style: 'text-transform: uppercase',
                maxlength: 10
              }
            },
            // validators: {
            //   ip: {
            //     expression: (c: AbstractControl) => !c.value || /[A-Za-z]{4}[0-9]{5}[A-Za-z]{1}/.test(c.value),
            //     message: (error: any, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a valid Tan`,
            //   },
            // },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'road',
            templateOptions: {
              // label: this.previousEmployement.previousEmployement[4].
              // investmentColumnTypeName,
              label: "Road/Street/Lane",
              placeholder: 'Enter address',
              required: true,
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
            },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'location',
            props: {
              placeholder: 'Enter Location',
              required: true,
              type: 'text',
              label: "Area/Location",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[10].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'city',
            props: {
              placeholder: 'Enter City',
              required: true,
              type: 'text',
              label: "Town / City / District",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[8].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'pinCode',
            props: {
              placeholder: 'Enter PIN',
              required: true,
              label: "PIN Code",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[9].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-3',
            type: 'select',
            key: 'state',
            props: {
              placeholder: 'Select state',
              required: true,
              valueProp: 'blockUtilizedEarlierId',
              labelProp: 'blockUtilizedEarlierValue',
              label: "State",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[9].
              // investmentColumnTypeName
            }
          }
        ],
      },
    ]
  }

  onCancleClick() {
    this.router.navigateByUrl('tds/dashboard')
  }

  insertPreviousEmployementSalary(data: any){

  }

}
