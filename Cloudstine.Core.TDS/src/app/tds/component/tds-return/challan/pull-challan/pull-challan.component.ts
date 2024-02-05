import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { TableColumn } from 'src/app/shared/data-grid/model/data-grid-column.model';



@Component({
  selector: 'pull-challan',
  templateUrl: './pull-challan.component.html',
  styleUrls: ['./pull-challan.component.scss'],
})

export class PullChallanComponent {
  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;
  
  formQsectionList = [
    { value: '1', label: 'From 24Q Section' },
    { value: '2', label: 'From 25Q Section' },
    { value: '3', label: 'From 24Q Section' }
  
  ]
  monthList = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },

  
  ]
tdsReturnList = [
  {
  sr_No: '001',
  bsrCode: '202324',
  date: '06/10.2024',
  challanserialnumber:'12345',
  paymenttype:'200',
  seccode:'24B',
  tds:'Enter Amount',
  surcharge:'Enter Amount',
  edcess:'Enter Amount',
  interest:'Enter Amount',
  fees:'Enter Amount',
  others:'Enter Amount',
  total:'2000'
},
{
  sr_No: '002',
  bsrCode: '202324',
  date: '06/10.2024',
  challanserialnumber:'12345',
  paymenttype:'200',
  seccode:'24B',
  tds:'Enter Amount',
  surcharge:'Enter Amount',
  edcess:'Enter Amount',
  interest:'Enter Amount',
  fees:'Enter Amount',
  others:'Enter Amount',
  total:'2000'
},
{
  sr_No: '003',
  bsrCode: '202324',
  date: '06/10.2024',
  challanserialnumber:'12345',
  paymenttype:'200',
  seccode:'24B',
  tds:'Enter Amount',
  surcharge:'Enter Amount',
  edcess:'Enter Amount',
  interest:'Enter Amount',
  fees:'Enter Amount',
  others:'Enter Amount',
  total:'2000'
},
{
  sr_No: '004',
  bsrCode: '202324',
  date: '06/10.2024',
  challanserialnumber:'12345',
  paymenttype:'200',
  seccode:'24B',
  tds:'Enter Amount',
  surcharge:'Enter Amount',
  edcess:'Enter Amount',
  interest:'Enter Amount',
  fees:'Enter Amount',
  others:'Enter Amount',
  total:'2000'
 
},

]
declaredTableColumns: TableColumn[] = [
  {
    field: 'sr_No',
    headerName: 'SR NO',
    filter: 'agTextColumnFilter',
    editable:true,
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 100
  },
  {
    field: 'bsrCode',
    headerName: 'BSR  Code',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'date',
    headerName: 'Date',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 100

  },
  {
    field: 'challanserialnumber',
    headerName: 'Challan Serial Number',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'paymenttype',
    headerName: 'Payment Type',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'seccode',
    headerName: 'Sec Code',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'tds',
    headerName: 'TDS',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150,
    editable:true,


  },
  {
    field: 'surcharge',
    headerName: 'Surcharge',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150,
    editable:true,


  },
  {
    field: 'edcess',
    headerName: 'Ed. Cess',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150,
    editable:true,


  },
  {
    field: 'interest',
    headerName: 'Interest',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150,
    editable:true,


  },
  {
    field: 'fees',
    headerName: 'Fees',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 120,
    editable:true,


  }, {
    field: 'others',
    headerName: 'Others',
    cellEditor: 'customTextCellEditor', // Replace with your custom cell editor component
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 120,
    editable:true,


  },
  {
    field: 'total',
    headerName: 'Total',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 120

  }
];
constructor(){}
selectEmployee(employees: any) {

}
onRowAction(data: any) {

}

ngAfterViewInit() {
  // Access the AG-Grid API after the grid has been fully initialized
  this.OnConfirmClick();
}
OnConfirmClick(){
  const editedRows = this.agGrid.api.getSelectedNodes();
  console.log('Edited Data:', editedRows.map(row => row.data));
}
onCellValueChanged(e:any){
  const editedRows = this.agGrid.api.getSelectedNodes();
  console.log('Edited Data:', editedRows.map(row => row.data));

}

}