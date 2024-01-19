import { Injectable } from '@angular/core';
import { ConfigurationSettings } from 'app/core/models/configuration';
import { SignUpModel } from 'app/core/models/SignUpModel';
import { APIService } from 'app/core/services/apiService';
import { UserProfile } from './userprofile.model';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  URLSaveUserProfileData: string = "UserProfile/saveuserprofiledata";
  URLGetStateNameList:string="UserProfile/getStateNameList";

  constructor(
    private apiService: APIService) {}
getStateNameList() {
        return this.apiService.getData(this.URLGetStateNameList );
      }
  SaveUserProfileData(userprofile: UserProfile){
    userprofile.AddedBy = ConfigurationSettings.getUserId();
    userprofile.Addedate = new Date(Date.now());
    userprofile.UpdatedBy = ConfigurationSettings.getUserId();
    userprofile.UpdatedDate = new Date(Date.now());
    return this.apiService.postData(this.URLSaveUserProfileData, userprofile);
  }
}
