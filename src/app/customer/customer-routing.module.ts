import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';

import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

import { AuthorisationService } from '../shared/services/index';

const customerRoutes: Routes = [
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

@NgModule({
    imports: [
        RouterModule.forChild(customerRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class CustomerRoutingModule { }
