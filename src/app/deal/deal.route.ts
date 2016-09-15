import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealsComponent } from './index';

import { DealDetailComponent } from './index';

import { AuthorisationService } from '../shared/services/index';

const dealRoute: Routes = [
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

export const DealRoute: ModuleWithProviders = RouterModule.forChild(dealRoute);