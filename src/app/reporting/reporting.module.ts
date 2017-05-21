import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular2DataTableModule } from 'angular2-data-table';

import { SharedModule } from '../shared/shared.module';

import { ReportingListComponent,
         MonthlyTotalsService,
         ReportingRouteModule }   from './index';
import { MonthlyTotalsComponent } from "app/reporting/monthly-totals";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Angular2DataTableModule,
    SharedModule,
    ReportingRouteModule
    ],
  exports: [ ReportingListComponent, MonthlyTotalsComponent],
  declarations: [ ReportingListComponent, MonthlyTotalsComponent],
  providers: [ MonthlyTotalsService ],
})
export class ReportingModule { }
