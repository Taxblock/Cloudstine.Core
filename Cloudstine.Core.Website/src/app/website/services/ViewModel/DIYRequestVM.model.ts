import { IncomeTaxEFillingRequestMaster } from '../Model/IncomeTaxEFillingRequestMaster.model';
import { OrderHeaderDetails } from '../Model/OrderHeaderDetails.model';
import { OrderLineDetails } from '../Model/OrderLineDetails.model';
import { ServiceRequestMaster } from '../Model/ServiceRequestMaster.model';

export class DIYRequestVM {
  ServiceId: number | null;
  ClassificationId: number | null;
  ClientProfileId: number | null;
  UserId: number | null;
  PANNO: string;
  Email:string;
}
