import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Angular2DataTableModule } from 'angular2-data-table';
import { DatepickerModule } from 'ng2-bootstrap/components/datepicker';

import { SharedModule } from '../shared/shared.module';

import {
         PersonalApplicationComponent,
         ApplicationService,
         ApplicationRoute }   from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Angular2DataTableModule,
    DatepickerModule,
    ApplicationRoute
  ],
  declarations: [
    PersonalApplicationComponent
  ],
  exports: [
    PersonalApplicationComponent
  ],
  providers: [ApplicationService]
})
export class ApplicationModule { }
