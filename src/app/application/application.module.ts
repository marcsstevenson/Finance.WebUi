import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Angular2DataTableModule } from 'angular2-data-table';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';

import { SharedModule } from '../shared/shared.module';

import {
         PersonalApplicationComponent,
         TransportationFormComponent,
         ApplicationService,
         ApplicationRoutingModule }   from './index';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { MarineFormComponent } from './marine-form/marine-form.component';
import { MotorcycleFormComponent } from './motorcycle-form/motorcycle-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Angular2DataTableModule,
    DatepickerModule,
    ApplicationRoutingModule
  ],
  declarations: [
    PersonalApplicationComponent,
    TransportationFormComponent,
    VehicleFormComponent,
    MarineFormComponent,
    MotorcycleFormComponent
  ],
  exports: [
    PersonalApplicationComponent,
    TransportationFormComponent
  ],
  providers: [ApplicationService]
})
export class ApplicationModule { }
