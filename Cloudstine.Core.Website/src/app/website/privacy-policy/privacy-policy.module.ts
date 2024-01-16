import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy.component';

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [CommonModule, PrivacyPolicyRoutingModule],
  providers: [],
})
export class PrivacyPolicyModule {}
