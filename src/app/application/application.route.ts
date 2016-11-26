import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
         PersonalApplicationComponent,
         TransportationFormComponent
        } from './index';

import { AuthorisationService } from '../shared/services/index';

const applicationRoute: Routes = [
    {
        path: 'personal-application',
        component: PersonalApplicationComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'personal-application/:id',
        component: PersonalApplicationComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'application/:id/transportation-form',
        component: TransportationFormComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'application',
        component: TransportationFormComponent,
        canActivate: [AuthorisationService]
    }

];

export const ApplicationRoute: ModuleWithProviders = RouterModule.forChild(applicationRoute);
