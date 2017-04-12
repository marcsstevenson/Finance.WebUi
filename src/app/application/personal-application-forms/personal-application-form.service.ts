import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GlobalVarables } from '../../global-variables';
import { PersonalApplicationFormPost } from "app/application/personal-application-forms/personal-application-form-post";

const API_URL = GlobalVarables.BASE_API_URL + 'api/PersonalApplicationForm';

@Injectable()
export class PersonalApplicationFormService {

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

  public save (personalApplicationFormPost: PersonalApplicationFormPost) {    
    let options = new RequestOptions({ headers: this.headers });

    return this._http.post(API_URL, personalApplicationFormPost, options)
    .map((response: Response) => response.json())
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  delete (id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.delete(API_URL + '?id=' + id , options)
    .toPromise()
    .catch((err: any) => this.handleError(err));
  }

  get(id: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(API_URL + '?id=' + id , options)
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err: any) => this.handleError(err));
  }

  private handleError (err: any) {
    console.log(err);
    return Promise.reject(err);
  }
}