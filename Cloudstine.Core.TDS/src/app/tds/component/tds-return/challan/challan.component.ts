import { Component } from '@angular/core';
import { TableColumn } from 'src/app/shared/data-grid/model/data-grid-column.model';



@Component({
  selector: 'challan',
  templateUrl: './challan.component.html',
  styleUrls: ['./challan.component.scss'],
})
export class ChallanComponent {
  tdsReturnList = [
    {
    sr_No: '001',
    BSRCode: '1234567',
    Date: '17/10/2023',
    SerialNumber: '12345',
    SectionCode: '92B',
    TDS: '12500.00',
    Surcharge: '0.00',
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
    BSRCode: '1234567',
    Date: '17/10/2023',
    SerialNumber: '12345',
    SectionCode: '92B',
    TDS: '12500.00',
    Surcharge: '0.00',
    EdCess: '0.00',
    Interest:'0.00',
    Fees:'0.00',
    Other:'0.00',
    Total:'0.00',
    Balance:'12000.00',
    Status:'Unmatched'
  },
  {
    sr_No: '003',
    BSRCode: '1234567',
    Date: '17/10/2023',
    SerialNumber: '12345',
    SectionCode: '92B',
    TDS: '12500.00',
    Surcharge: '0.00',
    EdCess: '0.00',
    Interest:'0.00',
    Fees:'0.00',
    Other:'0.00',
    Total:'0.00',
    Balance:'12000.00',
    Status:'Overbooked'
  }
   
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
    field: 'BSRCode',
    headerName: 'BSR Code',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
  },
  {
    field: 'Date',
    headerName: 'Date',
    filter: 'agSetColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 100

  },
  {
    field: 'SerialNumber',
    headerName: 'Serial Number',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'SectionCode',
    headerName: 'Section Code',
    filter: 'agTextColumnFilter',
    filterParams: {
      buttons: ['reset', 'apply'],
    },
    minWidth: 150

  },
  {
    field: 'TDS',
    headerName: 'TDS',
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
