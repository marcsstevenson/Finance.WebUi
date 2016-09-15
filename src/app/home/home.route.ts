import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './index';

import { AuthorisationService } from '../shared/services/index';

export const homeRoute: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthorisationService]
    }
];

export const HomeRoute = RouterModule.forChild(homeRoute);