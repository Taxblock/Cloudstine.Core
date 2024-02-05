import { Component, OnInit } from '@angular/core';
import { ActionColumn, TableColumn } from 'app/shared/data-grid/model/data-grid-column.model';
import { TransactionHistoryService } from './tansaction-history.service';
import { AlertService } from 'app/core/services/alertService';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
  public buttonTypes: any;
  userTableColumns: TableColumn[] = [    //tablecolumn
    {
      field: 'inovoiceDate',
      headerName: 'Inovoice Date',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 170
    },
    {
      field: 'inovoiceNumber',
      headerName: 'Inovoice Number',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 170
    },
    {
      field: 'paymentId',
      headerName: 'Payment ID',
      filter: 'agSetColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 170
    },
    {
      field: 'transactionType',
      headerName: 'Transaction Type',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 170
    },
    {
      field: 'product',
      headerName: 'Product',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
    },
    {
      field: 'description',
      headerName: 'Discription',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 170
    },
    {
      field: 'inovoiceAmount',
      headerName: 'Inovoice Amount(Rs)',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 200
    }
  ];

  userActionColumns: ActionColumn[] = [       //Action Cloumn
    {
      action: 'activate',
      actionPage: 'ViewEmployee',
      actionIcon: 'uil uil-download-alt',
      buttonClass: 'btn btn-lg btn-secondary',
      colorClass: 'text-secondary'
    },
  ];

  rowSelection: 'single' | 'multiple' = 'multiple';
  isMultipleSelected: boolean = false;
  selectedUsers: any[];
  dataSource: any[];
  private totalRecord: number;
  private isDirty: boolean = false;
  editable: boolean = false;
  closeable: boolean = false;
  showSearch: boolean = true;
  showStatus: boolean = true;
  showDepartment: boolean = true;
  paged: boolean = true;
  GetalltransationhistoryList: any[] = [     //static data list for ag-grid model
    {
      inovoiceDate: '17/10/2023',
      inovoiceNumber: '277000270943031',
      paymentId: 'pay_N5qKiDldh5vkNV',
      transactionType: 'Activate',
      product: 'Smart TDS',
      description: 'Platinum Subscription',
      inovoiceAmount: 1000
    },
    {
      inovoiceDate: '17/10/2023',
      inovoiceNumber: '277000270943035',
      paymentId: 'pay_N5qKiDldh5vkNl',
      transactionType: 'Activate',
      product: 'E-POI',
      description: 'Annual Subscription',
      inovoiceAmount: 1500
    }
  ];
  constructor(private transactionHistoryService: TransactionHistoryService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    //this.Getalltransationhistory();
  }
  onRowAction(data: any) {     //rowactions
    let action: string = data.action;
    let employee: any = data.row;
  }

  onActionButton(action: string) {    //action button method
    alert(action + ' ' + 'action button clicked.');
  }
  //Get All Transaction Data
  Getalltransationhistory() {
    this.transactionHistoryService.getalltransationhistory().subscribe(
      (result: any) => {
        this.GetalltransationhistoryList = result.Value;
      },
      (error: any) => {
        this.alertService.ShowError(error, "Failed to save due to Service error");
      }
    );
  }
}
