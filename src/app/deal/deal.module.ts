import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular2DataTableModule } from 'angular2-data-table';

import { SharedModule } from '../shared/shared.module';

import { DealsComponent,
         DealDetailComponent,
         DealService,
         DealRoutingModule }   from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    Angular2DataTableModule,
    DealRoutingModule
    ],
  declarations: [
    DealsComponent,
    DealDetailComponent
  ],
  exports: [
    DealsComponent,
    DealDetailComponent
  ],
  providers: [DealService]
})
export class DealModule { }
