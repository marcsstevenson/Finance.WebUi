import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  FinanceCompaniesComponent,
  FinanceCompanyDetailComponent
} from './index';

import { AuthorisationService } from '../shared/services/index';

const financeCompanyRoute: Routes = [
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

export const FinanceCompanyRoute: ModuleWithProviders = RouterModule.forChild(financeCompanyRoute);
