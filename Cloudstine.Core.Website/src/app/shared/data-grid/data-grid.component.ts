import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core'
import { GridApi, GridOptions, SelectionChangedEvent } from 'ag-grid-community';
import { ActionRendererComponent } from '../action-renderer/action-renderer.component';
import { ActionColumn, TableColumn } from './model/data-grid-column.model';



@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  @Input() isEditable = false;
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() isColumnFilterable = false;
  @Input() isResizable = false;
  @Input() isPageable = false;
  @Input() rowSelection: any;
  @Input() defaultColDef: any;
  @Input() tableColumns: TableColumn[] = [];
  @Input() actionColumns: ActionColumn[] = [];
  @Input() actionButtons: ActionColumn[] = [];
  @Input() defaultPageSize: number;

  @Output() selectedRows: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() actionButton: EventEmitter<any> = new EventEmitter<any>();

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }
  tableDataSource: [] = [];
  displayedColumns: TableColumn[] = [];

  gridOptions: GridOptions;
  gridApi: GridApi;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableColumns']) {
      this.displayedColumns = this.tableColumns;
      this.initializeColumns();
      this.gridOptions = <GridOptions>{
        suppressCellFocus: true,
        pagination:true,
        paginationPageSize: this.defaultPageSize,
        defaultColDef: {
          editable: this.isEditable,
          sortable: this.isSortable,
          resizable: this.isResizable,
          filter: this.isColumnFilterable,
          flex: 1,
          minWidth: 150,
  
  
        },
        
  
        getRowStyle(params) {
          if (params.data.isActive && params.data.cycleType) {
            return { 'background-color': '#aae796' }
          } else if (!params.data.isActive && params.data.cycleType) {
            return { 'color': 'red' }
          }
          return null;
        }
      };
    }
   
  }
  ngOnInit(): void {
  }

  initializeColumns(): void {
    // select column
    let selectColumn: TableColumn = {
      field: 'select',
      headerName: '',
      maxWidth: 30,
      headerCheckboxSelection: true,
      checkboxSelection: true,
    }
    // action buttons column
    let actionsColumn: TableColumn = {
      field: 'action',
      headerName: 'ACTIONS',
      maxWidth: 250,
      sortable: false,

     // cellRenderer: ActionRendererComponent,

      cellRendererParams: {
        actions: this.actionColumns,
        clicked: (data: any, action: string) => {
          this.emitRowAction(data, action, this.gridApi);
        }
      },
    }

    // show select and actions icon
    if (this.rowSelection?.length && this.actionColumns?.length) {
      this.displayedColumns = [selectColumn, ...this.tableColumns, actionsColumn];
    }
    // show select only
    else if (this.rowSelection?.length) {
      this.displayedColumns = [selectColumn, ...this.tableColumns];
    }
    // show actions only
    else if (this.actionColumns?.length) {
      this.displayedColumns = [...this.tableColumns, actionsColumn];
    }
    // show columns only
    else {
      this.displayedColumns = this.tableColumns;
    }
  }

  toggleSelectedRow(event: SelectionChangedEvent) {
    let selectedNodes = event.api.getSelectedNodes();
    let selectedRows: Array<any> = [];
    selectedNodes.forEach(element => {
      selectedRows.push(element.data);
    });
    this.selectedRows.emit(selectedRows);
  }

  emitRowAction(row: any, action: string, gridApi: any) {
    this.rowAction.emit({ row, action, gridApi });
  }

  emitActionButton(action: string) {
    this.actionButton.emit(action);
  }

  setTableDataSource(data: any) {
    this.tableDataSource = data;
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

}
