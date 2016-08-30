import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';

const BASE_API_URL = 'http://financeplatform.azurewebsites.net/api';

@Injectable()
export class CustomerService {

  private headers: Headers;

  constructor(private _http: Http) {

  }

  OnInit () {
    this.headers = new Headers;
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getCustomers () {
    return this._http.get(BASE_API_URL +  '/Customer')
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  getCustomer (id: string) {
    return this._http.get(BASE_API_URL + '/Customer?id=' + id)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  // addCustomer (customer: any) {
  //   return this._http.post(BASE_API_URL, customer, { headers: this.headers})
  //   .map((response: Response) => response.json())
  //   .toPromise()
  //   .catch((err: any) => this.handleError(err));
  // }

  addOrSaveCustomer (customer: any) {
    return this._http.post(BASE_API_URL + '/Customer', customer, { headers: this.headers})
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  deleteCustomer (id: string) {
    return this._http.delete(BASE_API_URL + '/Customer?id=' + id)
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  private handleError (err: any) {
    console.log(err);
    return Promise.reject(err);
  }

}
