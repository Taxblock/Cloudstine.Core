//Core Modules
import { DEFAULT_CURRENCY_CODE, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//Third Party Componants








import {
  NgbAccordionModule,
  NgbPopoverModule,
} from "@ng-bootstrap/ng-bootstrap";
import { POIRouting } from "./tds-routing.module";
import { TaxationLayoutModule } from "./tds-layout/tds-layout.module";
import { TDSReturnDashboardService } from "./component/tds-return-dashboard/tds-return-dashboard.service";



@NgModule({
  imports: [
    TaxationLayoutModule,
    CommonModule,
    FormsModule,
    POIRouting,
    ReactiveFormsModule,
    NgbAccordionModule,
    NgbPopoverModule,
 
  ],

  declarations: [
  
  ],

  exports: [FormsModule,ReactiveFormsModule],

  providers: [
    TDSReturnDashboardService
  ],
})
export class POIModule {}
