import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';

const BASE_API_URL = 'http://financeplatform.azurewebsites.net/api';

// const BASE_API_URL = 'http://192.168.1.42:1319/api';

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

  getCustomerNotes (id: string) {
    return this._http.get(BASE_API_URL + '/CustomerNote/GetForCustomer?customerId=' + id)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  addOrSaveCustomer (customer: any) {
    console.log('the customer obj is: ', customer);

    return this._http.post(BASE_API_URL + '/Customer', customer, { headers: this.headers})
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  addOrSaveCustomerNote (customerNote: any) {
    return this._http.post(BASE_API_URL + '/CustomerNote', customerNote, { headers: this.headers })
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  deleteCustomer (id: string) {
    return this._http.delete(BASE_API_URL + '/Customer?id=' + id)
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  deleteCustomerNote (id: string) {
    return this._http.delete(BASE_API_URL + '/CustomerNote' + id)
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  searchCustomer (searchObj: any) {
    return this._http.post(BASE_API_URL + '/CustomerSearch', searchObj, { headers: this.headers})
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  private handleError (err: any) {
    console.log(err);
    return Promise.reject(err);
  }

}
