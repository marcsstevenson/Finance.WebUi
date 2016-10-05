import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { Angular2DataTableModule } from 'angular2-data-table';

import { SharedModule } from '../shared/shared.module';

import {
  FinanceCompaniesComponent,
  FinanceCompanyDetailComponent,
  FinanceCompanyService,
  FinanceCompanyRoute
 }   from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Angular2DataTableModule,
    FinanceCompanyRoute
  ],
  exports: [
    FinanceCompaniesComponent,
    FinanceCompanyDetailComponent,
  ],
  declarations: [
    FinanceCompaniesComponent,
    FinanceCompanyDetailComponent,
    ],
  providers: [FinanceCompanyService],
})
export class FinanceCompanyModule { }