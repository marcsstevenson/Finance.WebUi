import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './index';

import { CustomerDetailComponent } from './index';

import { AuthorisationService } from '../shared/services/index';

const customerRoute: Routes = [
    {
        path: 'customer',
        component: CustomersComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'customer/:id',
        component: CustomerDetailComponent,
        canActivate: [AuthorisationService]
    }
];

export const CustomerRoute: ModuleWithProviders = RouterModule.forChild(customerRoute);
