import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';


@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent {
  form = new FormGroup({});
  PreviousEmployementSalaryModel = {}
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};

  constructor(
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.setParameter();
  }

  setParameter() {
    this.fields = [
      {
        fieldGroupClassName: 'row card-body p-2',
        key: 'ITDPreEmploymentSalModel',
        fieldGroup: [

          {
            className: 'col-md-3',
            type: 'input',
            key: 'Name',
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
            key: 'pan',
            props: {
              placeholder: 'Enter PAN',
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
            key: 'tan',
            props: {
              placeholder: 'Enter Tan',
              required: true,
              type: 'text',
              label: "TAN",
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
            key: 'gstn',
            templateOptions: {
              // label: this.previousEmployement.previousEmployement[4].
              // investmentColumnTypeName,
              label: "GSTN",
              placeholder: 'Enter GSTN',
              required: true,
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
            },
            // props: {
            //   label: "Employment Start Date",
            //   // label: this.previousEmployement.previousEmployement[5].
            //   //     investmentColumnTypeName,
            //   maxDate: this.minJoinDate,
            //   minDate: this.minDate,
            //   change: (field, event) => {
            //     const form = field.parent.formControl;
            //     let enterDate = moment(form.get('employeementStartDate').value).format('YYYY-MM-DD')
            //     if (enterDate > this.minJoinDate || enterDate < this.minDate) {
            //       form.get('employeementStartDate').setValue('')
            //     }

            //   }
            // },

          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'mobileNo',
            props: {
              placeholder: 'Enter Mobile No',
              required: true,
              type: 'number',
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
              placeholder: 'Enter Email',
              required: true,
              type: 'text',
              label: "Email Id",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[8].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-3',
            type: 'select',
            key: 'typeOfDeductor',
            props: {
              placeholder: 'Select Type',
              required: true,
              valueProp: 'blockUtilizedEarlierId',
              labelProp: 'blockUtilizedEarlierValue',
              label: "Type of Deductor",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[9].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-3',
            type: 'select',
            key: 'departmentName',
            props: {
              placeholder: 'Select Type',
              required: true,
              valueProp: 'blockUtilizedEarlierId',
              labelProp: 'blockUtilizedEarlierValue',
              label: "Ministry / Department Name",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[9].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-3',
            type: 'select',
            key: 'stateName',
            props: {
              placeholder: 'Select Type',
              required: true,
              valueProp: 'blockUtilizedEarlierId',
              labelProp: 'blockUtilizedEarlierValue',
              label: "State Name",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[9].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-3',
            type: 'select',
            key: 'status',
            props: {
              placeholder: 'Select Type',
              required: true,
              valueProp: 'blockUtilizedEarlierId',
              labelProp: 'blockUtilizedEarlierValue',
              label: "Status",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[9].
              // investmentColumnTypeName
            }
          },
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
