import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import * as moment from 'moment';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
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
      {
        fieldGroupClassName: 'row card-body p-2',
        key: 'ITDPreEmploymentSalModel',
        fieldGroup: [

          {
            className: 'col-md-3',
            type: 'input',
            key: 'employeeId',
            props: {
              placeholder: 'Enter Employee ID',
              required: true,
              type: 'text',
              label: "Employee ID",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:this.previousEmployement.previousEmployement[2].
              // investmentColumnTypeName
            },
          },
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
            type: 'select',
            key: 'sectionCode',
            props: {
              placeholder: 'Select section code',
              required: true,
              valueProp: 'blockUtilizedEarlierId',
              labelProp: 'blockUtilizedEarlierValue',
              label: "Section Code",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[9].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'paymentDate',
            templateOptions: {
              label: 'Date of Payment/Credit',
              placeholder: 'Date',
              required: true,
            },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'gstn',
            templateOptions: {
              // label: this.previousEmployement.previousEmployement[4].
              // investmentColumnTypeName,
              label: "Date of Deduction",
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
            key: 'paidAmount',
            props: {
              placeholder: 'Enter Amount',
              required: true,
              type: 'number',
              label: "Amount Paid",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[10].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'tds',
            props: {
              placeholder: 'TDS',
              required: true,
              type: 'number',
              label: "TDS",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[8].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'educationCess',
            props: {
              placeholder: 'Enter Education Cess',
              required: true,
              type: 'number',
              label: "Education Cess",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[8].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'surcharge',
            props: {
              placeholder: 'enter Surcharge',
              required: true,
              type: 'number',
              label: "Surcharge",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[8].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-3',
            type: 'select',
            key: 'reason',
            props: {
              placeholder: 'Select Type',
              required: true,
              valueProp: 'blockUtilizedEarlierId',
              labelProp: 'blockUtilizedEarlierValue',
              label: "Reason",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[9].
              // investmentColumnTypeName
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'certificateNo',
            props: {
              placeholder: 'Enter Certificate Number',
              required: true,
              type: 'number',
              label: "Certificate Number",
              //readonly: this.IsPreviousEmp || (this.isPOIStatusRejected && !this.isEmployee),
              // label:  this.previousEmployement.previousEmployement[8].
              // investmentColumnTypeName
            }
          },
        ],
      },
    ]
  }

  onCancleClick(){
    this.router.navigateByUrl('tds/tds-return/employee')
  }


  insertPreviousEmployementSalary(data: any){

  }

}
