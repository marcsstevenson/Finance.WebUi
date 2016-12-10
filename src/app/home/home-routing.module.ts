import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { AuthorisationService } from '../shared/services/index';

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthorisationService]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }

