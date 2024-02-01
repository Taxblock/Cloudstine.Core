import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/data-grid/model/data-grid-column.model';



@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  tdsReturnList = [
    {
    sr_No: '001',
    EmpID: '1234567',
    NAME: '17/10/2023',
    PAN: '12345',
    Sec: '92B',
    DateofPayment: '12500.00',
    AmountPaid: '0.00',
    Surcharge:'567',
    EdCess: '0.00',
    Interest:'0.00',
    Fees:'0.00',
    Other:'0.00',
    Total:'0.00',
    Balance:'12000.00',
    Status:'Matched'
  },
  {
    sr_No: '002',
    EmpID: '1234567',
    NAME: '17/10/2023',
    PAN: '12345',
    Sec: '92B',
    DateofPayment: '12500.00',
    AmountPaid: '0.00',
    Surcharge:'567',
    EdCess: '0.00',
    Interest:'0.00',
    Fees:'0.00',
    Other:'0.00',
    Total:'0.00',
    Balance:'12000.00',
    Status:'Matched'
  },
  {
    sr_No: '003',
    EmpID: '1234567',
    NAME: '17/10/2023',
    PAN: '12345',
    Sec: '92B',
    DateofPayment: '12500.00',
    AmountPaid: '0.00',
    Surcharge:'567',
    EdCess: '0.00',
    Interest:'0.00',
    Fees:'0.00',
    Other:'0.00',
    Total:'0.00',
    Balance:'12000.00',
    Status:'Matched'
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
    field: 'EmpID',
    headerName: 'Emp ID',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'NAME',
    headerName: 'NAME',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 100

  },
  {
    field: 'PAN',
    headerName: 'PAN',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'Sec',
    headerName: 'Sec',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'DateofPayment',
    headerName: 'Date of Payment',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'AmountPaid',
    headerName: 'Amount Paid',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  
  {
    field: 'Surcharge',
    headerName: 'Surcharge',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'EdCess',
    headerName: 'Ed. Cess',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'Interest',
    headerName: 'Interest',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'Fees',
    headerName: 'Fees',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'Other',
    headerName: 'Other',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 120

  }, {
    field: 'Total',
    headerName: 'Total',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 120

  },
  {
    field: 'Balance',
    headerName: 'Balance',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 120

  },
  {
    field: 'Status',
    headerName: 'Status',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 120

  }
];
selectEmployee(employees: any) {
  
}
onRowAction(data: any) {

}
}
