import { Injectable } from '@angular/core';
import {
     CanActivate,
     Router,
     ActivatedRouteSnapshot,
     RouterStateSnapshot
    } from '@angular/router';
// import { AuthenticationService } from './authentication.service';

const ACCESS_TOKEN = 'accessToken';

@Injectable()
export class AuthorisationService implements CanActivate {
    constructor(
        // private authService: AuthenticationService,
        private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let accessToken = localStorage.getItem(ACCESS_TOKEN);
        if (accessToken != null) {
            return true;
        }

        // this.authService.redirectUrl = state.url;

        this.router.navigate(['/login']);
        return false;
    }
}