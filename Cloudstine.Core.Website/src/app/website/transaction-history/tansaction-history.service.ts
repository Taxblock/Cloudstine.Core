import { Injectable } from '@angular/core';
import { APIService } from 'app/core/services/apiService';


@Injectable()
export class TransactionHistoryService {
  URLgetalltransationhistory:string="TransactionHistory/getalltransationhistory"
  constructor(private apiService: APIService) { }

  getalltransationhistory()
  {
    return this.apiService.getData(this.URLgetalltransationhistory);
  }
}
