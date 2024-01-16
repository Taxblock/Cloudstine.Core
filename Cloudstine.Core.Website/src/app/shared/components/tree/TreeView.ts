import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as core from '@angular/core';
import { TreeNode } from './TreeNode';
import { TreeNodeSearchPipe } from './TreeNodeSearchPipe';
import { TreeNodeCheckedPipe } from './TreeNodeCheckedPipe';

@Component({
  selector: 'treeview',
  template: `
    <ng-content select="[header]"></ng-content>

    <div [ngSwitch]="isChecked">
      <ul style="list-style-type:none;padding:0">
        <li
          *ngFor="let node of store"
          style="background: antiquewhite;padding:4px;margin:4px"
        >
          <p class="m-0">
            <span class="{{ uiClassPrefix }}-nodeButton" (click)="node.toggle()"
              >{{ node.icon }}
            </span>

            <input
              type="checkbox"
              [checked]="node.checked"
              [indeterminate]="false"
              [disabled]="false"
              (click)="node.check()"
            />
            {{ node.name }}
          </p>
          <div *ngIf="node.expanded" style="padding-left:10px;">
            <treeview
              [store]="node.nodes"
              [uiClassPrefix]="uiClassPrefix"
              [queryEl]="queryEl"
            ></treeview>
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class TreeView {
  @Input() queryEl: AbstractControl;
  @Input() isChecked: Boolean;
  @Input() store: Array<TreeNode>;
  @Input() uiClassPrefix: string;
}
