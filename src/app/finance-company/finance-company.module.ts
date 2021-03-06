import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular2DataTableModule } from 'angular2-data-table';

import { SharedModule } from '../shared/shared.module';

import {
  FinanceCompaniesComponent,
  FinanceCompanyDetailComponent,
  FinanceCompanyService,
  FinanceCompanyRoutingModule
 }   from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    Angular2DataTableModule,
    FinanceCompanyRoutingModule
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
