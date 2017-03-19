import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { GlobalVarables } from '../global-variables';

const BASE_API_URL = GlobalVarables.BASE_API_URL + 'api';

@Injectable()
export class LeadOriginService {
  private headers: Headers;

  constructor(private _http: Http) {
    // todo: move this to OnInit later.
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
  }

  OnInit () {
  }

  getLeadOrigins () {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(BASE_API_URL +  '/LeadOrigin', options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  getLeadOrigin (id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(BASE_API_URL + '/LeadOrigin?id=' + id, options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  addOrSaveLeadOrigin (leadOrigin: any) {
    console.log('the lead-origin obj is: ', leadOrigin);
    let options = new RequestOptions({ headers: this.headers });

    return this._http.post(BASE_API_URL + '/LeadOrigin', leadOrigin, options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  deleteLeadOrigin (id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.delete(BASE_API_URL + '/LeadOrigin?id=' + id, options)
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  searchLeadOrigin(searchObj: any) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.post(BASE_API_URL + '/LeadOriginSearch', searchObj,  options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  private handleError (err: any) {
    console.log(err);
    return Promise.reject(err);
  }
}
