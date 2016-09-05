import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { GlobalVarables } from '../global-variables';

const BASE_API_URL = GlobalVarables.BASE_API_URL + 'api';

@Injectable()
export class CustomerService {

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

  getCustomers () {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(BASE_API_URL +  '/Customer',  options )
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  getCustomer (id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(BASE_API_URL + '/Customer?id=' + id, options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  getCustomerNotes (id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(BASE_API_URL + '/CustomerNote/GetForCustomer?customerId=' + id, options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  getCustomerDeals (id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(BASE_API_URL + '/Deal/GetForCustomer?customerId=' + id, options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  addOrSaveCustomer (customer: any) {
    console.log('the customer obj is: ', customer);
    let options = new RequestOptions({ headers: this.headers });

    return this._http.post(BASE_API_URL + '/Customer', customer, options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  addOrSaveCustomerNote (customerNote: any) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.post(BASE_API_URL + '/CustomerNote', customerNote, options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  deleteCustomer (id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.delete(BASE_API_URL + '/Customer?id=' + id , options)
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  deleteCustomerNote (id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.delete(BASE_API_URL + '/CustomerNote' + id, options)
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  searchCustomer (searchObj: any) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.post(BASE_API_URL + '/CustomerSearch', searchObj,  options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  private handleError (err: any) {
    console.log(err);
    return Promise.reject(err);
  }

}
