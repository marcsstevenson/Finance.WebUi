import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const BASE_API_URL = 'http://financeplatform.azurewebsites.net/api';

// const BASE_API_URL = 'http://192.168.1.42:1319/api';

@Injectable()
export class DealService {

  private headers: Headers;

  constructor(private _http: Http) {
    // todo: move this to OnInit later.
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
  }

  OnInit() {

  }

  getDeals() {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(BASE_API_URL + '/Deal', options)
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err: any) => this.handleError(err));
  }

  getDeal(id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(BASE_API_URL + '/Deal?id=' + id, options)
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err: any) => this.handleError(err));
  }

  addOrSaveDeal(deal: any) {
    let options = new RequestOptions({ headers: this.headers });

    console.log('the deal obj is: ', deal);
    return this._http.post(BASE_API_URL + '/Deal', deal, options)
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err: any) => this.handleError(err));
  }

  deleteDeal(id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.delete(BASE_API_URL + '/Deal?id=' + id, options)
      .toPromise()
      .catch((err: any) => this.handleError(err));
  }

  private handleError(err: any) {
    console.log(err);
    return Promise.reject(err);
  }

}
