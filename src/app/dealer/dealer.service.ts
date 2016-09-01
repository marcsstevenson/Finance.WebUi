import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';

// const BASE_API_URL = 'http://financeplatform.azurewebsites.net/api';

const BASE_API_URL = 'http://192.168.1.42:1319/api';

@Injectable()
export class DealerService {
  private headers: Headers;

  constructor(private _http: Http) {

  }

  OnInit () {
    this.headers = new Headers;
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getDealerships () {
    return this._http.get(BASE_API_URL +  '/Dealership')
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  getDealership (id: string) {
    return this._http.get(BASE_API_URL + '/Dealership?id=' + id)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  addOrSaveDealership (dealership: any) {
    console.log('the dealership obj is: ', dealership);

    return this._http.post(BASE_API_URL + '/Dealership', dealership, { headers: this.headers})
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  deleteDealership (id: string) {
    return this._http.delete(BASE_API_URL + '/Dealership?id=' + id)
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  private handleError (err: any) {
    console.log(err);
    return Promise.reject(err);
  }
}
