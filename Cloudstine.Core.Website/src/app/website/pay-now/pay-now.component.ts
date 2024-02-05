import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pay-now',
  templateUrl: './pay-now.component.html',
  styleUrls: ['./pay-now.component.scss']
})
export class PayNowComponent implements OnInit {
  PaymentInfo: FormGroup;
  Payment_Info: any;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.CreateForm();
  }
  CreateForm() {
    this.PaymentInfo = this.formBuilder.group({
      creditAmount: [],
      gstn: [],
      totalinovoiceAmount: [],
      discountAmount: [],
      netAmount: []
    });
    this.Payment_Info = this.PaymentInfo.controls;
  }

}
