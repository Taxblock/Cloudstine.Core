import { Injectable } from '@angular/core';
import { UserProfileService } from 'app/core/services/user-profile.service';
import { ConfigurationSettings } from '../../core/models/configuration';
import { APIService } from '../../core/services/apiService';
import { HomeMaster } from './home.model';

@Injectable()
export class HomeService {
  constructor(
    private apiService: APIService,
    private userService: UserProfileService
  ) {}
  URLAdd: string = ConfigurationSettings.Masters + '/NewsMaster/save';
  URLGetAll: string = ConfigurationSettings.Masters + '/NewsMaster/getall';
  URLGetTopBlogs: string = ConfigurationSettings.Masters + '/BlogMaster/topFour';
  URLGetTopFaqs: string =
    ConfigurationSettings.Masters + '/FAQMaster/getQuestion';
  urlDeleteHomeMasterDetails: string =
    ConfigurationSettings.Masters + '/NewsMaster/delete';
  urlGetHomeMasterDetailsByNewsId: string =
    ConfigurationSettings.Masters + '/NewsMaster/find';
    URLGetTopNews: string =
    ConfigurationSettings.Masters + '/NewsMaster/topFourNews';

  Add(homeMaster: HomeMaster) {
    homeMaster.AddedBy = this.userService.CurrentUserValue.UserId;
    homeMaster.UpdatedBy = this.userService.CurrentUserValue.UserId;
    homeMaster.AddedDate = new Date(Date.now());
    homeMaster.UpdatedDate = new Date(Date.now());
    return this.apiService.postData(this.URLAdd, homeMaster);
  }
  GetAll() {
    return this.apiService.getData(this.URLGetAll);
  }
  GetTopFaqs() {
    return this.apiService.getData(this.URLGetTopFaqs);
  }

  GetTopNews() {
    return this.apiService.getData(this.URLGetTopNews);
  }

  GetTop4Blogs() {
    return this.apiService.getData(this.URLGetTopBlogs);
  }

  

  Delete(homeMaster: HomeMaster) {
    return this.apiService.postData(
      this.urlDeleteHomeMasterDetails,
      homeMaster
    );
  }

  Find(NewsId: number) {
    return this.apiService.getData(
      this.urlGetHomeMasterDetailsByNewsId + '/' + NewsId
    );
  }
}
