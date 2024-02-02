import { Injectable } from "@angular/core";
import { ConfigurationSettings } from "src/app/core/models/configuration";
import { APIService } from "src/app/core/services/apiService";

@Injectable({ providedIn: "root" })
export class UploadService {
  private downloadExcelFileUrl: string = "";
  

  constructor(private apiService: APIService) { }

  getTemplateBites() {
    return this.apiService.getData(
      this.downloadExcelFileUrl);
  }

 
}
