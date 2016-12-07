import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealersComponent } from './index';

import { DealerDetailComponent } from './index';

import { AuthorisationService } from '../shared/services/index';

const dealerRoute: Routes = [
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

export const DealerRoute: ModuleWithProviders = RouterModule.forChild(dealerRoute);

