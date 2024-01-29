import { Injectable } from '@angular/core';
import { APIService } from '../../core/services/apiService'
@Injectable({
  providedIn: 'root'
})
export class ProductDashboardService {
  private urlAllProductList: string = "";
  private urlPurchaseProduct: string = "";

  constructor(private apiService: APIService) { }

  getAllProduct() {
    return this.apiService.getData(this.urlAllProductList);
  }
  getPurchaseProduct() {
    let UserId = 4;
    return this.apiService.getData(this.urlPurchaseProduct + "/" + UserId);
  }
}
