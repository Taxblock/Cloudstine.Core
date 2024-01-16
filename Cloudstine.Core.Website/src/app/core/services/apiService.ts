import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

import { CoreLoadingScreenService } from './loading-screen.service';
import { ConfigurationSettings } from '../models/configuration';
import { LoaderService } from './loaderService';

@Injectable({ providedIn: 'root' })
export class APIService {
  public isOnline: boolean;
  private httpClientWithoutInterCeptor: HttpClient;
  constructor(
    private http: HttpClient,
    private handler: HttpBackend,
    private router: Router,
    private _loaderService:LoaderService
  ) {
    this.httpClientWithoutInterCeptor = new HttpClient(handler);
  }

  postData(apiURL, data) {
    //this.loaderService.show();
   this._loaderService.display(true);

    
    let URL = ConfigurationSettings.BASE_API_URL + apiURL;
    let body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    
 
    return this.http.post(URL, body, httpOptions).pipe(
      map((response: Response) => {
        this._loaderService.display(false);
            return { Value: response };  
      }),
      
      catchError((error: any) => {
        this._loaderService.display(false);
         throw error;
      }),

      finalize(() => {
        this._loaderService.display(false);
      }),
    );
  }


  postDataWithoutSpinner(apiURL, data) {
    this._loaderService.display(true);
    let URL = ConfigurationSettings.BASE_API_URL + apiURL;
    let body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(URL, body, httpOptions).pipe(
      map((response: Response) => {
        this._loaderService.display(false);
        return { Value: response };
      })
    );
  }

  postBlob(apiURL, formData) {
    this._loaderService.display(true);
    let URL = ConfigurationSettings.BASE_API_URL + apiURL;
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Content-Type': 'text/plain; charset=utf-8',
      }),
    };
    return this.http.post(URL, formData).pipe(
      map((response: Response) => {
        this._loaderService.display(false);
        return { Value: response };
      })
    );
  }

  getData(apiURL) {
    this._loaderService.display(true);
    let URL = ConfigurationSettings.BASE_API_URL + apiURL;
    return this.http.get(URL).pipe(
      map((response: Response) => {
        this._loaderService.display(false);
        return { Value: response };
      })
    );
  }

  getDataWithoutSpinner(apiURL) {
    this._loaderService.display(true);
    let URL = ConfigurationSettings.BASE_API_URL + apiURL;
    return this.http.get(URL).pipe(
      map((response: Response) => {
        this._loaderService.display(false);
        return { Value: response };
      })
    );
  }

  getFile(apiURL: string) {
    this._loaderService.display(true);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'blob' as 'json',
    };
    let URL = ConfigurationSettings.BASE_API_URL + apiURL;
    return this.http.get(URL, httpOptions).pipe(
      map((response: Response) => {
        this._loaderService.display(false);
        return { Value: response };
      })
    );
  }

  postDownloadFile(apiURL, data) {
    this._loaderService.display(true);
    let URL = ConfigurationSettings.BASE_API_URL + apiURL;
    let body = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'blob' as 'json',
    };
    //  var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post(URL, body, httpOptions).pipe(
      map((response: Response) => {
        this._loaderService.display(false);
        return { Value: response };
      })
    );
  }
}
