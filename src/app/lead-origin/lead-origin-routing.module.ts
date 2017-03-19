import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadOriginsComponent } from './lead-origins/lead-origins.component';

import { LeadOriginDetailComponent } from './lead-origin-detail/lead-origin-detail.component';

import { AuthorisationService } from '../shared/services/index';

const leadOriginRoutes: Routes = [
    {
        path: 'lead-origin',
        component: LeadOriginsComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'lead-origin/:id',
        component: LeadOriginDetailComponent,
        canActivate: [AuthorisationService]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(leadOriginRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LeadOriginRouteModule { }


