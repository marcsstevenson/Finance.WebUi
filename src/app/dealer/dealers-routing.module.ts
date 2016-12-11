import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealersComponent } from './dealers/dealers.component';

import { DealerDetailComponent } from './dealer-detail/dealer-detail.component';

import { AuthorisationService } from '../shared/services/index';

const dealerRoutes: Routes = [
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

@NgModule({
    imports: [
        RouterModule.forChild(dealerRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DealerRouteModule { }


