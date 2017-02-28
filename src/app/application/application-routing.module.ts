import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalApplicationComponent } from './personal/personal-application.component';
import { TransportationFormComponent } from './transportation-form/transportation-form.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

import { AuthorisationService } from '../shared/services/index';

const applicationRoutes: Routes = [
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
    },
    {
        path: 'application/:id/vehicle-form',
        component: VehicleFormComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'vehicle-form',
        component: VehicleFormComponent,
        canActivate: [AuthorisationService]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(applicationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ApplicationRoutingModule { }

