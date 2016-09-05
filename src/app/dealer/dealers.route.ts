import { RouterConfig } from '@angular/router';

import { DealersComponent } from './index';

import { DealerDetailComponent } from './index';

import { AuthorisationService } from '../shared/services/index';

export const DealershipRoute: RouterConfig = [
    {
        path: 'dealership',
        component: DealersComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'dealership/:id',
        component: DealerDetailComponent,
        canActivate: [AuthorisationService]
    }
];
