import { Component, OnInit } from '@angular/core';
import { ActionColumn, TableColumn } from 'app/shared/data-grid/model/data-grid-column.model';
import { UserModel } from './user.model';
import { AlertService } from 'app/core/services/alertService';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public buttonTypes: any;

  userModel = new UserModel();
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
      field: 'mailId',
      headerName: 'Mail ID',
      filter: 'agSetColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
      },
      minWidth: 100

    },
    {
      field: 'mobileNumber',
      headerName: 'Mobile Number',
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
    private userManagementService: UserManagementService) {

   }

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

  OnSaveClick(){
    this.userManagementService.insertUserDetails(this.userModel).subscribe(
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

}
