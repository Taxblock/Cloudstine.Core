import { Injectable } from '@angular/core';
import { APIService } from 'src/app/core/services/apiService';
import { AddChallanModel } from './add-challan.model';
import { VerifyChallanModel } from './verify-challan.model';


@Injectable()
export class AddChallanService {
  private urlgetPaymentTypeList: string = "";
  private urlgetPaidByBookList: string = "";
  private urlgetSectionCodeList: string = "";
  private urlinsertAddChallanData:string="";
  private urlverifyChallan:string="";
  constructor(private apiService: APIService) {}
  getPaymentTypeList() {
    return this.apiService.getData(this.urlgetPaymentTypeList);
  }
  getPaidByBookList()
  {
    return this.apiService.getData(this.urlgetPaidByBookList);

  }
  getSectionCodeList()
  {
    return this.apiService.getData(this.urlgetSectionCodeList);

  }
  insertAddChallanData(adChallanModel:AddChallanModel)
  {
    return this.apiService.postData(this.urlinsertAddChallanData, adChallanModel);


  }
  verifyChallan(verifyChallanModel : VerifyChallanModel){
    return this.apiService.postData(this.urlverifyChallan, verifyChallanModel);
  }
 
}
