import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-label',
  template: `
    <label [attr.for]="id" style="font-weight:bold; font-size=14px; margin-bottom:0.5rem;" class="form-control-label control-label" *ngIf="to.label">
      {{ to.label }}
      <ng-container *ngIf="to.required && to.hideRequiredMarker !== true">*</ng-container>
    </label>
    <ng-template #fieldComponent></ng-template>
  `,
})
export class LabelWrapper extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) override fieldComponent: ViewContainerRef;
}