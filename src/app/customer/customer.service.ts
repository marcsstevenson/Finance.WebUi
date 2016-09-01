import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';

// const BASE_API_URL = 'http://financeplatform.azurewebsites.net/api';

const BASE_API_URL = 'http://192.168.1.42:1319/api';

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

    console.log('the customer obj is: ', customer);

    customer = {
    // "Id": "5aba7010-4003-425e-be1a-a668018431ad",
    "Gender": null,
    "FirstName": "Tim",
    "LastName": "Hong",
    "DriversLicenceNumber": null,
    "DateOfBirth": "2016-08-20T23:33:22.277",
    "Number": "CU0000003",
    "Email": null,
    "PhoneCountry": "03",
    "PhoneArea": "333",
    "PhoneNumber": "2222",
    "CellCountry": "021",
    "CellArea": "123",
    "CellNumber": "123",
    "FaxCountry": "123",
    "FaxArea": "1231",
    "FaxNumber": "123123",
    "SkypeName": "tigertim719",
    "Website": null,
    "BankingCompany": null,
    "BankAccountName": null,
    "BankBranchName": null,
    "BankAccountNumber": null,
    "DateCreated": "2016-08-20T23:33:22.277",
    "DateModified": "2016-08-30T08:27:53.303"
    }
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
