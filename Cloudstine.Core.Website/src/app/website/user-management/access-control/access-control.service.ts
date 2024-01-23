import { Injectable } from '@angular/core';
import { APIService } from 'app/core/services/apiService';
import { AccessControl } from './access-control.model';

@Injectable({
  providedIn: 'root'
})
export class AccessControlService {
  private urlSaveAccessControl: string = "";
  constructor(private apiService: APIService) { }

  insertAccessControlDetails(accessControl : AccessControl){
    return this.apiService.postData(this.urlSaveAccessControl, accessControl);
  }
}
