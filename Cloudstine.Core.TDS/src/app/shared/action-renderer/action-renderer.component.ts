import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-action-renderer',
  templateUrl: './action-renderer.component.html',
  styleUrls: ['./action-renderer.component.scss']
})
export class ActionRendererComponent implements ICellRendererAngularComp {

  params: any;

  agInit(params: any): void {
    //code added for view-employee
    if(params.actions.length>0){
      if(params.actions[0].actionPage === 'ViewEmployee'){
        if(params.data.isActive){
          params.actions = params.actions.filter(function( obj ) {
            return obj.action !== 'activate';
          });
        }
        else if(!params.data.isActive){
          params.actions = params.actions.filter(function( obj ) {
            return obj.action !== 'deactivate';
          });
        }
      }
    }
    this.params = params;
  }

  btnClickedHandler(action: string) {
    this.params.clicked(this.params.data, action);
  }

  refresh() {
    return false;
  }

}
