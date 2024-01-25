import { Injectable } from '@angular/core';
import { APIService } from 'app/core/services/apiService';


@Injectable()
export class PayNowService {
  URLgetalltransationhistory:string="TransactionHistory/getalltransationhistory"
  constructor(private apiService: APIService) { }

 
}
