import { Component, OnInit } from '@angular/core';
import { AlertService } from 'app/core/services/alertService';
import { ActionColumn, TableColumn } from 'app/shared/data-grid/model/data-grid-column.model';
import { AccessControlService } from './access-control.service';
import { AccessControl } from './access-control.model';

@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.scss']
})
export class AccessControlComponent implements OnInit {
  public buttonTypes: any;
  accessControlModel = new AccessControl();
  submitted = false;
  user: any = {};
  userTableColumns: TableColumn[] = [
    {
      field: 'SrNo',
      headerName: 'Sr No',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100
    },
    {
      field: 'userName',
      headerName: 'User Name',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
    },
    {
      field: 'applicationName',
      headerName: 'Application Name',
      filter: 'agSetColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100
    },
    {
      field: 'role',
      headerName: 'Role',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 120
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

  users: string[] = ['aman', 'naman', 'Vijay', 'shukla'];
  Applications: any = ['POI', 'TDS', 'INSTAGRAM'];

  rowSelection: 'single' | 'multiple' = 'multiple';
  isMultipleSelected: boolean = false;
  selectedUsers: any[];
  dataSource: any[];
  data: any[];
  private totalRecord: number;
  private isDirty: boolean = false;
  editable: boolean = false;
  closeable: boolean = false;
  showSearch: boolean = true;
  showStatus: boolean = true;
  showDepartment: boolean = true;
  paged: boolean = true;

  constructor(private alertService: AlertService,
    private accessControlService: AccessControlService) { }

  ngOnInit(): void {
  }

  addUserClick() {

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

  setDummyValues() {
    this.accessControlModel.userName = 'John Doe';
    this.accessControlModel.role = 'Employee';
    this.accessControlModel.applicationName = 'POI';
    // Set other properties...
  }

  setEditable() {
    this.isDirty = false;
    this.paged = true;
    this.showSearch = true;
    this.showStatus = true;
    this.showDepartment = true;
    this.buttonTypes = null;
    this.closeable = false;
    this.editable = false;
    this.dataSource = this.data;
    this.dataSource.forEach(e => e.status = e.isActive ? 'Active' : 'Inactive')
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

  onActionButton(action: string) {
    alert(action + ' ' + 'action button clicked.');
  }

  OnSaveClick() {
    this.accessControlService.insertAccessControlDetails(this.accessControlModel).subscribe(
      (result: any) => {
        let serviceResponse = result.Value;
        // if (serviceResponse.responseCode == ResponseCode.Success) {
        //   let responseData = serviceResponse;
        //   this.personalInfoModel = new EmployeePersonalInfoModel();
        //   this.alertService.ShowSuccessMessage(this.messageService.addedSuccessfully);
        //   this.manualService.setRecordInitialized(true);
        //   this.router.navigate([this.next], { state: { ignore: true } });
        // }
        // else if (serviceResponse.responseCode == ResponseCode.PANAlreadyExists) {
        //   this.alertService.ShowErrorMessage(this.messageService.alreadyPANExists);
        // }
        // else if (serviceResponse.responseCode == ResponseCode.EmailAlreadyExists) {
        //   this.alertService.ShowErrorMessage(this.messageService.alreadyEmailExists);
        // }
        // else {
        //   this.alertService.ShowErrorMessage(this.messageService.serviceError);
        // }
      },
      (error: any) => {
        this.alertService.ShowErrorMessage(error.error);
      }
    );
  }

  onClickAddUserAccess() {
    document.getElementById('example3').click();
  }

}
