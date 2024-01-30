import { Component, ElementRef, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { ActionColumn, TableColumn } from "src/app/shared/data-grid/model/data-grid-column.model";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  options = [
    { value: '1', label: 'All' },
    { value: '2', label: 'Tata Motors Ltd.' },
    { value: '3', label: 'Tata Autocomp Ltd' }
  
  ]
  data = [
    {
    sr_No: '001',
    deductorName: 'Tata Motors Ltd.',
    tan: 'DBEP45875L',
    panNo: 'ABDPP1571H',
    gstin: 'GST434555567000K',
    responsiblePerson: 'Ganesh Agre',
    mobile: '7304474973',
    status: 'Active'
  },
  {
    sr_No: '002',
    deductorName: 'Taxblock Ltd',
    tan: 'DBEP45875L',
    panNo: 'ABDPP1571H',
    gstin: 'GST434555567000K',
    responsiblePerson: 'Sagar Nehe',
    mobile: '7304474973',
    status: 'Active'
  },
  {
    sr_No: '003',
    deductorName: 'Tata Autocomp Ltd',
    tan: 'DBEP45875L',
    panNo: 'ABDPP1571H',
    gstin: 'GST434555567000K',
    responsiblePerson: 'Vishal Thorat',
    mobile: '7304474973',
    status: 'Active'
  },
  {
    sr_No: '004',
    deductorName: 'Tata Still Ltd',
    tan: 'DBEP45875L',
    panNo: 'ABDPP1571H',
    gstin: 'GST434555567000K',
    responsiblePerson: 'Vinayak Kapse',
    mobile: '7304474973',
    status: 'Active'
  }


  
]
  rowSelection: 'single' | 'multiple' = 'multiple';

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
      field: 'deductorName',
      headerName: 'DEDUCTOR NAME',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
    },
    {
      field: 'tan',
      headerName: 'TAN',
      filter: 'agSetColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'panNo',
      headerName: 'PAN',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 120

    },
    {
      field: 'gstin',
      headerName: 'GSTN',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
    },
    {
      field: 'responsiblePerson',
      headerName: 'RESPONSIBLE PERSON',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 120

    },
    {
      field: 'mobile',
      headerName: 'MOBILE NUMBER',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 120

    },
    {
      field: 'status',
      headerName: 'STATUS',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 120

    }
  ];
  declaredActionColumns: ActionColumn[] = [
    {
      action: 'view',
      actionPage: 'ViewEmployee',
      actionIcon: 'uil uil-cog rounded text-secondary mb-0',
      buttonClass: 'btn btn-sm btn-secondary',
      colorClass: 'text-secondary h4'
    },

  ];


  constructor(
    private router:Router
  ){

  }

  onRowAction(data: any) {

  }

  onActionButton(action: string) {
    alert(action + ' ' + 'action button clicked.');
  }
  selectEmployee(employees: any) {

  }

  onClickNewDeductor(){
    this.router.navigateByUrl('tds/deductor-details/basic-info')
  }
}