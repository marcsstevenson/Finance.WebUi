import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/delay';
import { GlobalVarables } from '../../global-variables';

const BASE_API_URL = GlobalVarables.BASE_API_URL;

const AUTH_DATA_NAME = 'authData';
const ACCESS_TOKEN = 'accessToken';

// const BASE_API_URL = 'http://192.168.1.42:1319/api';

@Injectable()
export class AuthenticationService {
    // isLoggedIn: boolean = false;
    redirectUrl: string;

    private headers: Headers;

    constructor (
        private http: Http,
        private router: Router
    ) {}

    login(userName: string, password: string) {
        let authQueryString = 'userName=' + userName + '&password=' + password + "&grant_type=password";
        return this.http.post(BASE_API_URL + 'Token?', authQueryString)
        .map((response: any) => {
            response.json();

            localStorage.setItem(AUTH_DATA_NAME, response._body);

            let authDataObj = JSON.parse(response._body);
            localStorage.setItem(ACCESS_TOKEN, authDataObj.access_token);

            // this.isLoggedIn = true;
            console.log(response._body);
        })
        .toPromise()
        .catch((err: any) => this.handleError(err));
    }

    logout() {
        localStorage.removeItem(AUTH_DATA_NAME);
        localStorage.removeItem(ACCESS_TOKEN);

        this.router.navigate(['login']);

        // return this.http.post(BASE_API_URL + 'api/Account/Logout', {})
        // .map((response: any) => {
        //     response.json();

        //     this.router.navigate(['login']);
        //     // this.isLoggedIn = true;
        //     console.log(response._body);
        // })
        // .toPromise()
        // .catch((err: any) => this.handleError(err));
    }

    getAuthToken() {
        let accessToken = '';
        let authData = JSON.parse(localStorage.getItem(AUTH_DATA_NAME));

        if (authData != null) {
            accessToken = authData.access_token;
        }
        return accessToken;
    }

    isLoggedIn() {
        let isLoggedIn = !!localStorage.getItem(AUTH_DATA_NAME);

        // console.log('User is logged in: ', isLoggedIn);
        return isLoggedIn;
    }

    private handleError (err: any) {
        console.log(err);
        return Promise.reject(err);
    }
}