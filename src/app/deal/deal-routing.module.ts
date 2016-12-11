import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealsComponent } from './deals/deals.component';

import { DealDetailComponent } from './deal-detail/deal-detail.component';

import { AuthorisationService } from '../shared/services/index';

const dealRoutes: Routes = [
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

@NgModule({
    imports: [
        RouterModule.forChild(dealRoutes)
    ],
    exports: [
        RouterModule
    ],
})

export class DealRoutingModule { }