import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActionColumn, TableColumn } from 'app/shared/data-grid/model/data-grid-column.model';
import { Router } from "@angular/router";
import { AgGridAngular } from "ag-grid-angular";
import { ColDef, GridApi, GridReadyEvent, StatusPanelDef } from "ag-grid-community";
import { Subscription } from "rxjs";
import { UserSearchParameterModel } from './user-search-parameter.model';
import { UserManagementService } from './user-management.service';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { UserModel } from './users/user.model';
// import { ConfigurationSettings } from "src/app/core/models/configuration";
// import { ResponseCode } from "src/app/core/models/responseObject.model";
// import { AlertService } from "src/app/core/services/alertService";
// import { MessageService } from "src/app/core/services/message.service";
// import { ExcelExportService } from "src/app/shared/excel-export/excel-export.service";
// import { EmployeePersonalInfoModel } from "src/app/shared/Models/employee-personal-info.model";
// import { EmployeeSearchParameterModel } from "src/app/shared/Models/employee-search.model";
// import { ExcelExportColumnModel } from "src/app/shared/Models/excel-export-column.model";
// import { EmployerService } from "../employer.service";
// import { ViewUpdateEmployeeService } from "./view-update-employee.service";


@Component({
  selector: 'user',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class userManagementcomponent implements OnInit {
  @ViewChild(AddUserDialogComponent) addUserDialog!: AddUserDialogComponent;

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
  
  submitted = false;
  user: any = {};

  constructor(private userManagementService : UserManagementService) {

  }

  ngOnInit() {
    // this.getEmployeeList().add(() => {
    //   this.getViewEmployeeSelectList().add(() => {
    //   });
    // });


  }

  onClickAddUser() {
    document.getElementById('example3').click();
  }

  login() {
    this.submitted = true;
    this.userModel.username = this.user.name;
    this.userModel.mailId = this.user.email;
    this.userModel.mobileNo = this.user.mobile;
    let a=JSON.stringify(this.userModel)
    console.log(a+"---------------------------------");
   }

  getEmployeeList() {
    let userSearchParameterModel = new UserSearchParameterModel();
    // userSearchParameterModel.companyId = ConfigurationSettings.getCompanyId();
    // userSearchParameterModel.companyFinancialId = ConfigurationSettings.getCompanyFinancialId();
    // userSearchParameterModel.pageNumber = this.currentPage + 1;
    // userSearchParameterModel.pageSize = 10000;
    // userSearchParameterModel.searchText = this.searchText;
    // userSearchParameterModel.departmentId = this.departmentId;
    // userSearchParameterModel.departmentId = this.departmentId;


    return this.userManagementService.getUserList(userSearchParameterModel).subscribe(
      (result: any) => {
        this.data = result.Value;
        if (this.data.length > 0) {
          this.totalRecord = this.data[0].recordCount;
        }
        else {
          this.totalRecord = 0;
        }
        this.setEditable();
      },
      (error: any) => {
        //this.alertService.ShowErrorMessage(error.error);
      }
    );
  }

  getViewEmployeeSelectList() {
    return this.userManagementService.getViewEmployeeSelectList().subscribe(
      (result: any) => {
        let serviceResponse = result.Value;
        // this.countryList = serviceResponse.countryList;
        // this.stateList = serviceResponse.stateList;
        // this.cityList = serviceResponse.cityList;
        // this.departmentList = serviceResponse.departmentList;
        // this.departmentList.unshift({ name: "All", departmentId: 0 });
        // this.roleList = serviceResponse.roleList;
      },
      (error: any) => {
        //this.alertService.ShowErrorMessage(error.error);
      }
    );
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

}
