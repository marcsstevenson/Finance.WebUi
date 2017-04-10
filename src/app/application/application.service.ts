import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GlobalVarables } from '../global-variables';

const BASE_API_URL = GlobalVarables.BASE_API_URL + 'api';

@Injectable()
export class ApplicationService {

  private headers: Headers;

  constructor(
    private _http: Http
    ) {
      // todo: move this to OnInit later.
      this.headers = new Headers();
      this.headers.append('Accept', 'application/json');
      this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
    }

  OnInit () {
  }

  getCustomerApplications () {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(BASE_API_URL +  '/CustomerApplication',  options )
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  getCustomerApplication (id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(BASE_API_URL + '/CustomerApplication?id=' + id, options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  savePersonalApplication (customer: any) {
    console.log('the customer obj is: ', customer);
    let options = new RequestOptions({ headers: this.headers });

    return this._http.post(BASE_API_URL + '/PersonalApplication', customer, options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  deletePersonalApplication (id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.delete(BASE_API_URL + '/PersonalApplication?id=' + id , options)
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  addOrSaveCustomerApplication (customer: any) {
    console.log('the customer obj is: ', customer);
    let options = new RequestOptions({ headers: this.headers });

    return this._http.post(BASE_API_URL + '/CustomerApplication', customer, options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  deleteCustomerApplication (id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.delete(BASE_API_URL + '/Customer?id=' + id , options)
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  search (searchObj: any) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.post(BASE_API_URL + '/PersonalApplicationSearch', searchObj,  options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  private handleError (err: any) {
    console.log(err);
    return Promise.reject(err);
  }

}
