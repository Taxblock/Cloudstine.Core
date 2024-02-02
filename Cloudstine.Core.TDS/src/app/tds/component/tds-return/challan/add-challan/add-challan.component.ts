import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { AddChallanService } from './add-challan.service';
import { AlertService } from 'src/app/core/services/alertService';
import { AddChallanModel } from './add-challan.model';
import { ResponseCode } from 'src/app/core/models/responseObject.model';
import { MessageService } from 'src/app/core/services/message.service';
import { VerifyChallanModel } from './verify-challan.model';



@Component({
  selector: 'add-challan',
  templateUrl: './add-challan.component.html',
  styleUrls: ['./add-challan.component.scss'],
})
export class AddChallanComponent {
  form = new FormGroup({});
  PreviousEmployementSalaryModel = {}
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions = {};
  paymentTypeList= [];
  getPaidByBookList=[];
  getSectionCodeList=[];
  selected: any;
  addChallanModel: any = {};
  verifyChallanModel = new VerifyChallanModel();


  constructor(
    private router: Router,
    private addChallanService:AddChallanService,
    private alertService:AlertService,
    private messageService: MessageService,

  ) {

  }
  ngOnInit(): void {
    this.setParameter();
  }
  GetPaymentTypeList() {
    this.addChallanService.getPaymentTypeList().subscribe(
      (result: any) => {
        this.paymentTypeList = result.Value;
        this.setParameter(); 
        this.paymentTypeList = result.Value;
        this.selected = this.paymentTypeList[0].paymentTypeId;
       

      },
      (error: any) => {
        this.alertService.ShowErrorMessage(error.error);
      }
    );
  }
  GetPaidByBookList() {
    this.addChallanService.getPaidByBookList().subscribe(
      (result: any) => {
        this.getPaidByBookList = result.Value;
        this.setParameter(); 
        this.getPaidByBookList = result.Value;
        this.selected = this.getPaidByBookList[0].paidbyBookEntryorOtherwiseId;
       

      },
      (error: any) => {
        this.alertService.ShowErrorMessage(error.error);
      }
    );
  }
  GetSectionCodeList() {
    this.addChallanService.getSectionCodeList().subscribe(
      (result: any) => {
        this.getSectionCodeList = result.Value;
        this.setParameter(); 
        this.getSectionCodeList = result.Value;
        this.selected = this.getSectionCodeList[0].sectionCodeId;
       

      },
      (error: any) => {
        this.alertService.ShowErrorMessage(error.error);
      }
    );
  }
  setParameter() {
    this.fields = [
      {
        fieldGroupClassName: 'row card-body p-2',
        key: 'addChallanModel',
        fieldGroup: [

          {
            className: 'col-md-3',
            type: 'input',
            key: 'bsrCode',
            props: {
              placeholder: 'Enter BSR Code',
              required: true,
              type: 'text',
              label: "BSR Code",
            },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'dateOfTaxDeposite',
            props: {
              placeholder: 'Enter Date Of Tax Deposite',
              required: true,
              type: 'date',
              label: "Date Of Tax Deposite",
        
            },
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'chalanSerialNumber',
            props: {
              placeholder: 'Enter Chalan Serial Number',
              required: true,
              type: 'text',
              label: "Chalan Serial Number",      
            },
        
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'challanStatus',
            templateOptions: {
              label: "Challan Status",
              placeholder: 'Enter challan Status',
              required: true,
            },
           

          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'tds',
            props: {
              placeholder: 'Enter TDS',
              required: true,
              type: 'number',
              label: "TDS",
              
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'educationcess',
            props: {
              placeholder: 'Enter Education Cess',
              required: true,
              type: 'number',
              label: "Education Cess",
            
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'surcharge',
            props: {
              placeholder: 'Enter Surcharge',
              required: true,
              type: 'number',
              label: "Surcharge",
            
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'totalTaxDeposited',
            props: {
              placeholder: 'Enter Total Tax Deposited',
              type: 'number',
              label: "Total Tax Deposited",
            
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'fee',
            props: {
              placeholder: 'Enter Fee',
              required: true,
              type: 'number',
              label: "Fee",
            
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'interest',
            props: {
              placeholder: 'Enter Interest',
              required: true,
              type: 'number',
              label: "Interest",
            
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'others',
            props: {
              placeholder: 'Enter Others/Penalty',
              required: true,
              type: 'number',
              label: "Others/Penalty",
            
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'totalAmount',
            props: {
              placeholder: 'Enter Total Amount',
              required: true,
              type: 'number',
              label: "Total Amount",
            
            }
          },
          
          {
            className: 'col-md-3',
            type: 'select',
            key: 'paymentType',
            props: {
              placeholder: 'Select Type',
              required: true,
              valueProp: 'paymentTypeId',
              labelProp: 'paymentTypeValue',
              label: "Payment Type",
             
            }
          },
          {
            className: 'col-md-3',
            type: 'select',
            key: 'paidbyBookEntryorOtherwise',
            props: {
              placeholder: 'Select Type',
              required: true,
              valueProp: 'paidbyBookEntryorOtherwiseId',
              labelProp: 'paidbyBookEntryorOtherwiseValue',
              label: "Paid by Book Entry or Otherwise?",
           
            }
          },
          {
            className: 'col-md-3',
            type: 'select',
            key: 'sectionCode',
            props: {
              placeholder: 'Select Type',
              required: true,
              valueProp: 'sectionCodeId',
              labelProp: 'sectionCodeValue',
              label: "Section Code",
             
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'amountUtilized',
            props: {
              placeholder: 'Enter Amount Utilized',
              required: true,
              type: 'number',
              label: "Amount Utilized",
            
            }
          },
          {
            className: 'col-md-3',
            type: 'input',
            key: 'balanceAmount',
            props: {
              placeholder: 'Enter Balance Amount',
              required: true,
              type: 'number',
              label: "Balance Amount",
            
            }
          },
        ],
      },
    ]
  }
  onCancleClick() {
    this.router.navigateByUrl('tds/tds-return')
  }

  onSubmit(form: any) {
    if (this.form.valid) {
      this.InsertAddChallanData();
    }
  }
  InsertAddChallanData() {
    let addChallanModel: AddChallanModel 
    return this.addChallanService.insertAddChallanData(addChallanModel).subscribe(
      (result: any) => {
        let serviceResponse = result.Value;
        if (serviceResponse.responseCode == ResponseCode.Success) {
          this.alertService.ShowSuccessMessage(this.messageService.savedSuccessfully);
        }
        else {
          this.alertService.ShowErrorMessage(this.messageService.serviceError);
        }
      },
      (error: any) => {
        this.alertService.ShowErrorMessage(error.error);
      }
    );
  }
//pop-up for new-return-from
onVerifyChallanClick()
{
  document.getElementById('onverifyclickmodel').click();

}
//Save pop-up form for new retrun on new-retun button
OnSaveClick()
{
  this.addChallanService.verifyChallan(this.verifyChallanModel).subscribe(
    (result: any) => {
      let serviceResponse = result.Value;
    },
    (error: any) => {
      this.alertService.ShowErrorMessage(error.error);
    }
  );
}
}