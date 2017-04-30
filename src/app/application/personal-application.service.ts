import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GlobalVarables } from '../global-variables';
import { PersonalApplication } from "app/application/personal-application/personal-application";
import { PersonalApplicationStatusOption } from "app/application/PersonalApplicationStatusOption";

const BASE_API_URL = GlobalVarables.BASE_API_URL + 'api';

@Injectable()
export class PersonalApplicationService {

  private headers: Headers;
  private PersonalApplicationStatusOptions: Array<PersonalApplicationStatusOption>;

  constructor(
    private _http: Http
  ) {
    // todo: move this to OnInit later.
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
  }

  OnInit() {
  }

  getPersonalApplicationStatusOptions() {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(BASE_API_URL + '/PersonalApplicationStatus', options)
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err: any) => this.handleError(err));
  }

  get(id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(BASE_API_URL + '/PersonalApplication?id=' + id, options)
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err: any) => this.handleError(err));
  }

  save(personalApplication: PersonalApplication) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.post(BASE_API_URL + '/PersonalApplication', personalApplication, options)
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err: any) => this.handleError(err));
  }

  delete(id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.delete(BASE_API_URL + '/PersonalApplication?id=' + id, options)
      .toPromise()
      .catch((err: any) => this.handleError(err));
  }

  search(searchObj: any) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.post(BASE_API_URL + '/PersonalApplicationSearch', searchObj, options)
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err: any) => this.handleError(err));
  }

  private handleError(err: any) {
    console.log(err);
    return Promise.reject(err);
  }

}
