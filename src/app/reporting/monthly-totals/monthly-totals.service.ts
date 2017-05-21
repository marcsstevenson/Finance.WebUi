import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { GlobalVarables } from '../../global-variables';

const BASE_API_URL = GlobalVarables.BASE_API_URL + 'api';

@Injectable()
export class MonthlyTotalsService {
  private headers: Headers;

  constructor(private _http: Http) {
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
  }


  DealershipProfitReport(monthValue: number, yearValue: number) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(BASE_API_URL + '/DealershipProfitReport?monthValue=' + monthValue + "&yearValue=" + yearValue, options)
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err: any) => this.handleError(err));
  }

  private handleError(err: any) {
    console.log(err);
    return Promise.reject(err);
  }
}
