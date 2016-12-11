import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceCompaniesComponent } from './finance-companies/finance-companies.component';
import { FinanceCompanyDetailComponent } from './finance-company-detail/finance-company-detail.component';

import { AuthorisationService } from '../shared/services/index';

const financeCompanyRoutes: Routes = [
  {
    path: 'finance-company',
    component: FinanceCompaniesComponent,
    canActivate: [ AuthorisationService ]
  },
  {
    path: 'finance-company/:id',
    component: FinanceCompanyDetailComponent,
    canActivate: [ AuthorisationService ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(financeCompanyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FinanceCompanyRoutingModule { }

