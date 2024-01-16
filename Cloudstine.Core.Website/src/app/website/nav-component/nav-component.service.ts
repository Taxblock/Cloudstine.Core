import { Injectable } from '@angular/core';
import { ConfigurationSettings } from '../../core/models/configuration';

import { APIService } from '../../core/services/apiService';





@Injectable()
export class NavComponentService {

    private urlSaveCart: string = ConfigurationSettings.Transactions + "/UserCart/save";
    private urlGetCartByUserId: string = ConfigurationSettings.Transactions + "/UserCart/getusercart";
    private urlCreateOrder: string = ConfigurationSettings.Transactions + "/Order/createOrder";

    constructor(private apiService: APIService,
    ) { }

    GetCartByUserId(userId: number) {
        return this.apiService.getData(this.urlGetCartByUserId + "/" + userId);
    }


}
