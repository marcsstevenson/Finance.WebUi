import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Angular2DataTableModule } from 'angular2-data-table';
import { DatepickerModule } from 'ng2-bootstrap/components/datepicker';

import { SharedModule } from '../shared/shared.module';

import {
         PersonalApplicationComponent,
         TransportationFormComponent,
         ApplicationService,
         ApplicationRoutingModule }   from './index';

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
    TransportationFormComponent
  ],
  exports: [
    PersonalApplicationComponent,
    TransportationFormComponent
  ],
  providers: [ApplicationService]
})
export class ApplicationModule { }
