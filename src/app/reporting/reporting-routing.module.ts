import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorisationService } from '../shared/services/index';
import { ReportingListComponent } from "app/reporting/reporting-list";
import { MonthlyTotalsComponent, MonthlyTotalsService } from "app/reporting/monthly-totals";

const reportingRoutes: Routes = [
    {
        path: 'reporting',
        component: ReportingListComponent,
        canActivate: [AuthorisationService]
    }
    ,{
        path: 'reporting/monthly-totals',
        component: MonthlyTotalsComponent,
        canActivate: [AuthorisationService]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(reportingRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ReportingRouteModule { }