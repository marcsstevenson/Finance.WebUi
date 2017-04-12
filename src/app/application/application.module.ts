import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular2DataTableModule } from 'angular2-data-table';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';

import { SharedModule } from '../shared/shared.module';

import {
         PersonalApplicationsComponent,
         PersonalApplicationComponent,
         TransportationFormComponent,
         ApplicationService,
         PersonalApplicationFormService,
         ApplicationRoutingModule }   from './index';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { MarineFormComponent } from './marine-form/marine-form.component';
import { MotorcycleFormComponent } from './motorcycle-form/motorcycle-form.component';
import { FormListComponent } from "app/application/personal-application";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    Angular2DataTableModule,
    DatepickerModule.forRoot(),
    ApplicationRoutingModule
  ],
  declarations: [
    PersonalApplicationsComponent,
    PersonalApplicationComponent,
    FormListComponent,
    TransportationFormComponent,
    VehicleFormComponent,
    MarineFormComponent,
    MotorcycleFormComponent
  ],
  exports: [
    PersonalApplicationsComponent,
    PersonalApplicationComponent,
    TransportationFormComponent
  ],
  providers: [ApplicationService, PersonalApplicationFormService]
})
export class ApplicationModule { }
