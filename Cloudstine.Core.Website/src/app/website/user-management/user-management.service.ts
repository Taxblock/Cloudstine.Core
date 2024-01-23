import { Injectable } from '@angular/core';
import { APIService } from 'app/core/services/apiService';
import { UserSearchParameterModel } from './user-search-parameter.model';
import { UserModel } from './users/user.model';


@Injectable()
export class UserManagementService {
  private urlGetUserList: string = "";
  private urlGetViewUserSelectList: string = "";
  private urlSaveUser: string = "";

  constructor(private apiService: APIService) { }

  getUserList(userSearchParameterModel: UserSearchParameterModel) {
    return this.apiService.postData(this.urlGetUserList, userSearchParameterModel);
  }

  getViewEmployeeSelectList() {
    let companyFinancialId = 100;//ConfigurationSettings.getCompanyFinancialId();
    return this.apiService.getData(this.urlGetViewUserSelectList + "/" + companyFinancialId);
  }

  insertUserDetails(userModel : UserModel){
    return this.apiService.postData(this.urlSaveUser, userModel);
  }
 
}
