import { Component, OnInit } from '@angular/core';
import { ActionColumn, TableColumn } from 'src/app/shared/data-grid/model/data-grid-column.model';

@Component({
  selector: 'app-salary-info',
  templateUrl: './salary-info.component.html',
  styleUrls: ['./salary-info.component.scss']
})
export class SalaryInfoComponent implements OnInit {

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
  radioOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' }
  ];
  selectedOption: string = 'option1';

  companyList = [];
  userTableColumns: TableColumn[] = [
    {
      field: 'salarySectionName',
      headerName: 'Salary Section Name',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100
    },
    {
      field: 'salarySectionType',
      headerName: 'Salary Section Type',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
    }

  ];
  userActionColumns: ActionColumn[] = [
    {
      action: 'edit',
      actionPage: 'ViewEmployee',
      actionIcon: 'uil uil-pen',
      buttonClass: 'btn btn-sm btn-secondary',
      colorClass: 'text-success'
    },
    {
      action: 'activate',
      actionPage: 'ViewEmployee',
      actionIcon: 'uil uil-user-times',
      buttonClass: 'btn btn-sm btn-secondary',
      colorClass: 'text-danger'
    },
    {
      action: 'deactivate',
      actionPage: 'ViewEmployee',
      actionIcon: 'uil uil-user',
      buttonClass: 'btn btn-sm btn-secondary',
      colorClass: 'text-success'
    }
  ];

  data = [
    { salarySectionName: 'John Doe', salarySectionType: 'john.doe@example.com', mobileNumber: '1234567890' },
    { salarySectionName: 'Jane Smith', salarySectionType: 'jane.smith@example.com', mobileNumber: '9876543210' },
    // Add more dummy data...
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRowAction(data: any) {
    let action: string = data.action;
    let employee: any = data.row;

    // switch(action){
    //   case 'edit':
    //     this.employerService.setUserDetailsNFinancialId({ userId: employee.userId , userFinancialId: employee.userFinancialId });
    //     this.router.navigate(["/poi/employer/add-employee/manual/personal-info/personal-details"], { state: { ignore: true } });  
    //     break;
    //   case "deactivate":
    //     this.onDeActivateEmployee(employee);
    //     break;
    //   case "activate":
    //     this.onActivateEmployee(employee);
    //     break;
    // }
  }

  selectEmployee(employees: any) {
    if (employees.length > 0) {
      this.isMultipleSelected = true;
      this.selectedUsers = employees;
    }
    else {
      this.isMultipleSelected = false;
    }
  }

  onActionButton(action: string) {
    alert(action + ' ' + 'action button clicked.');
  }

  onSaveTaxRegimeBinding(){

  }

  onCompanySelect(data :any){

  }

}
