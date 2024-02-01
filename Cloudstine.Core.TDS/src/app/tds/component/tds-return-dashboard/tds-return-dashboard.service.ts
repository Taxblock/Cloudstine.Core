import { Injectable } from '@angular/core';
import { APIService } from 'src/app/core/services/apiService';
import { NewReturnModel } from './new-return.model';


@Injectable()
export class TDSReturnDashboardService {
  private URLgettdsReturnList: string = "";
  private URLgetfinancialYearList: string = "";
  private URLgetreturnTypeList:string="";
  private URLgetquarterTypeList:string="";
  private URLgetstatementTypeList:string="";
  private urlSaveNewreturn:string="";

  constructor(private apiService: APIService) { }

  gettdsReturnList()
  {
    return this.apiService.getData(this.URLgettdsReturnList);
  }
  getfinancialYearList()
  {
    return this.apiService.getData(this.URLgetfinancialYearList);

  }
  getreturnTypeList() {
    return this.apiService.getData(this.URLgetreturnTypeList);

  }
  getquarterTypeList()
  {
    return this.apiService.getData(this.URLgetquarterTypeList);

  }
  getstatementTypeList()
  {
    return this.apiService.getData(this.URLgetstatementTypeList);

  }

  insertNewReturn(newReturnModel : NewReturnModel){
    return this.apiService.postData(this.urlSaveNewreturn, newReturnModel);
  }
 
}
