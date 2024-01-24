import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { TransactionHistoryService } from './tansaction-history.service';
import { TransactionHistoryRoutingModule } from './tansaction-history-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { TransactionHistoryComponent } from './transaction-history.component';




@NgModule({
  declarations: [TransactionHistoryComponent],
  imports: [
    CommonModule,
    TransactionHistoryRoutingModule,
    SharedModule
  ],
  providers: [TransactionHistoryService],
  exports: [NgxTinySliderModule],
})
export class TransactionHistoryModule {}
