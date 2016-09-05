import { RouterConfig } from '@angular/router';

import { HomeComponent } from './index';

import { AuthorisationService } from '../shared/services/index';

export const HomeRoute: RouterConfig = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthorisationService]
    }
];
