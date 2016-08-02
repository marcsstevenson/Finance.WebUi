import { RouterConfig } from '@angular/router';

import { CustomersComponent } from './index';

import { AuthorisationService } from '../shared/services/index';

export const CustomersRoute: RouterConfig = [
    {
        path: 'customer',
        component: CustomersComponent,
        canActivate: [AuthorisationService]
    }
];
