import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TDSRETURNComponent } from './tds-return.component';
import { TDSRETURNRoutingModule } from './tds-return-routing.module';



@NgModule({
  declarations: [TDSRETURNComponent],
  imports: [CommonModule, TDSRETURNRoutingModule, FormsModule ],
  providers: [],
  exports: [],
})
export class TDSRETURNModule {}
