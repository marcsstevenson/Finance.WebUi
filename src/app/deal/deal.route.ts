import { RouterConfig } from '@angular/router';

import { DealsComponent } from './index';

import { DealDetailComponent } from './index';

import { AuthorisationService } from '../shared/services/index';

export const DealRoute: RouterConfig = [
    {
        path: 'deal',
        component: DealsComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'deal/:id',
        component: DealDetailComponent,
        canActivate: [AuthorisationService]
    }
];
