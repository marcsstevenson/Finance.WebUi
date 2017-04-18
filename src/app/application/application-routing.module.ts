import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PersonalApplicationsComponent } from './personal-applications/personal-applications.component';
import { PersonalApplicationComponent } from './personal-application/personal-application.component';
import { TransportationFormComponent } from './transportation-form/transportation-form.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { MarineFormComponent } from './marine-form/marine-form.component';
import { MotorcycleFormComponent } from './motorcycle-form/motorcycle-form.component';

import { AuthorisationService } from '../shared/services/index';
import { PrivateSaleAgreementComponent } from "app/application/private-sale-agreement/private-sale-agreement.component";

const applicationRoutes: Routes = [
    {
        path: 'personal-applications',
        component: PersonalApplicationsComponent,
        canActivate: [AuthorisationService]
    },
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
        path: 'transportation-form',
        component: TransportationFormComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'personal-application/:id/transportation-form/:formId',
        component: TransportationFormComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'personal-application/:id/vehicle-form/:formId',
        component: VehicleFormComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'vehicle-form',
        component: VehicleFormComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'personal-application/:id/marine-form/:formId',
        component: MarineFormComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'marine-form',
        component: MarineFormComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'personal-application/:id/motorcycle-form/:formId',
        component: MotorcycleFormComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'motorcycle-form',
        component: MotorcycleFormComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'personal-application/:id/private-sale-agreement/:formId',
        component: PrivateSaleAgreementComponent,
        canActivate: [AuthorisationService]
    },
    {
        path: 'private-sale-agreement',
        component: PrivateSaleAgreementComponent,
        canActivate: [AuthorisationService]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(applicationRoutes), ReactiveFormsModule
    ],
    exports: [
        RouterModule
    ]
})
export class ApplicationRoutingModule { }

