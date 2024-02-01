import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alertService';
import { TableColumn } from 'src/app/shared/data-grid/model/data-grid-column.model';
import { NewReturnModel } from './new-return.model';
import { TDSReturnDashboardService } from './tds-return-dashboard.service';



@Component({
  selector: 'tds-return',
  templateUrl: './tds-return-dashboard.component.html',
  styleUrls: ['./tds-return-dashboard.component.scss'],
})
export class TDSRETURNDASHBOARDComponent {
  newReturnModel = new NewReturnModel();

  financialYearList = [
    { value: '1', label: 'FY 2023-24' },
    { value: '2', label: 'FY 2024-25' },
    { value: '3', label: 'FY 2025-26' }
  
  ]
  returnTypeList = [
    { value: '1', label: '24Q' },
    { value: '2', label: '25Q' },
    { value: '3', label: '26Q' }
  
  ]
  quarterTypeList = [
    { value: '1', label: 'Q1' },
    { value: '2', label: 'Q2' },
    { value: '3', label: 'Q3' }
  
  ]
  statementTypeList = [
    { value: '1', label: 'Regular' },
    { value: '2', label: 'Irregular' },
  
  ]
  tdsReturnList = [
    {
    sr_No: '001',
    finanicialYear: '2023-24',
    quarter: 'Q1',
    returnType: '24Q',
    statementType: 'Regular',
    returnStatus: 'Filed',
    tracessesStatus: 'Pending for Processing',
    dateOfFilling: '25/06/2023',
    tokenNumber:'070512344563124',
    preparedBy:'Ganesh Patil',
    filedBy:'Vinod Kumar',
    remark:''
  },
  {
    sr_No: '002',
    finanicialYear: '2023-24',
    quarter: 'Q1',
    returnType: '24Q',
    statementType: 'Regular',
    returnStatus: 'In Process',
    tracessesStatus: '-',
    dateOfFilling: '-',
    tokenNumber:'-',
    preparedBy:'-',
    filedBy:'-',
    remark:'-'
  },
  
]
declaredTableColumns: TableColumn[] = [
  {
    field: 'sr_No',
    headerName: 'SR NO',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 100
  },
  {
    field: 'finanicialYear',
    headerName: 'Finanicial Year',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'quarter',
    headerName: 'Quarter',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 100

  },
  {
    field: 'returnType',
    headerName: 'Return Type',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'statementType',
    headerName: 'Statement Type',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'returnStatus',
    headerName: 'Return Status',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'tracessesStatus',
    headerName: 'Tracesses Status',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'dateOfFilling',
    headerName: 'Date Of Filling',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'tokenNumber',
    headerName: 'Token Number',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'preparedBy',
    headerName: 'prepared By',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'filedBy',
    headerName: 'Filed By',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 120

  }, {
    field: 'remark',
    headerName: 'Remark',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 120

  }
];
constructor( private router:Router,
  private alertService: AlertService,
  private tdsReturndashboardService: TDSReturnDashboardService) {

}
selectEmployee(employees: any) {

}
onRowAction(data: any) {

}
//pop-up for new-return-from
onClickNewReturn()
{
  document.getElementById('newreturnmodel').click();

}
//Save pop-up form for new retrun on new-retun button
OnSaveClick()
{
  this.tdsReturndashboardService.insertNewReturn(this.newReturnModel).subscribe(
    (result: any) => {
      let serviceResponse = result.Value;
    },
    (error: any) => {
      this.alertService.ShowErrorMessage(error.error);
    }
  );
}
//list-patched in agd-grid
GettdsReturnList() {  
  this.tdsReturndashboardService.gettdsReturnList().subscribe(
    (result: any) => {

      this.tdsReturnList = result.Value;
    },
    (error: any) => {
      this.alertService.ShowError(error, "Failed to save due to Service error");
    }
  );

}
//GetFinanancialYearList
GetfinancialYearList() {  
  this.tdsReturndashboardService.getfinancialYearList().subscribe(
    (result: any) => {

      this.financialYearList = result.Value;
    },
    (error: any) => {
      this.alertService.ShowError(error, "Failed to save due to Service error");
    }
  );

}
//GetRetrunTypeList
GetreturnTypeList() {  
  this.tdsReturndashboardService.getreturnTypeList().subscribe(
    (result: any) => {

      this.returnTypeList = result.Value;
    },
    (error: any) => {
      this.alertService.ShowError(error, "Failed to save due to Service error");
    }
  );

}
//GetQuartTypeList
GetquarterTypeList() {  
  this.tdsReturndashboardService.getquarterTypeList().subscribe(
    (result: any) => {

      this.quarterTypeList = result.Value;
    },
    (error: any) => {
      this.alertService.ShowError(error, "Failed to save due to Service error");
    }
  );

}
//GetStatmenttypelist
GetstatementTypeList() {  
  this.tdsReturndashboardService.getstatementTypeList().subscribe(
    (result: any) => {

      this.statementTypeList = result.Value;
    },
    (error: any) => {
      this.alertService.ShowError(error, "Failed to save due to Service error");
    }
  );

}
}
