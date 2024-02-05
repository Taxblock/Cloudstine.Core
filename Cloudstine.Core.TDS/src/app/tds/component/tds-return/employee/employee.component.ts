import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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
      Surcharge: '567',
      EdCess: '0.00',
      Interest: '0.00',
      Fees: '0.00',
      Other: '0.00',
      Total: '0.00',
      Balance: '12000.00',
      Status: 'Matched'
    },
    {
      sr_No: '002',
      EmpID: '1234567',
      NAME: '17/10/2023',
      PAN: '12345',
      Sec: '92B',
      DateofPayment: '12500.00',
      AmountPaid: '0.00',
      Surcharge: '567',
      EdCess: '0.00',
      Interest: '0.00',
      Fees: '0.00',
      Other: '0.00',
      Total: '0.00',
      Balance: '12000.00',
      Status: 'Matched'
    },
    {
      sr_No: '003',
      EmpID: '1234567',
      NAME: '17/10/2023',
      PAN: '12345',
      Sec: '92B',
      DateofPayment: '12500.00',
      AmountPaid: '0.00',
      Surcharge: '567',
      EdCess: '0.00',
      Interest: '0.00',
      Fees: '0.00',
      Other: '0.00',
      Total: '0.00',
      Balance: '12000.00',
      Status: 'Matched'
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
      minWidth: 80
    },
    {
      field: 'EmpID',
      headerName: 'Emp ID',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

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
      minWidth: 100

    },
    {
      field: 'Sec',
      headerName: 'Sec',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

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
      field: 'tds',
      headerName: 'TDS',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'Surcharge',
      headerName: 'Surcharge',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'EdCess',
      headerName: 'Ed. Cess',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'totalDeduction',
      headerName: 'Total Deduction',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 150

    },
    {
      field: 'totalDeposited',
      headerName: 'Total Deposited',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 150

    },
    {
      field: 'deductionDate',
      headerName: 'Deduction Date',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 150

    }, {
      field: 'Total',
      headerName: 'Total',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'Balance',
      headerName: 'Balance',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'Status',
      headerName: 'Status',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    }
  ];
  constructor(private router: Router, private route: ActivatedRoute) {

  }
  selectEmployee(employees: any) {

  }
  onRowAction(data: any) {

  }

  onAddEmployee() {
    this.router.navigateByUrl('tds/tds-return/add-employee')
  }

  onUploadExelClick() {
    let data1: string = "employee"
    const data = {
      source: 'employee'
    };

    this.router.navigate(['tds/tds-return/upload-exel'], { queryParams: data });

  }
}
