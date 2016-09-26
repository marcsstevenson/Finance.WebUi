import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Angular2DataTableModule } from 'angular2-data-table';

import { SharedModule } from '../shared/shared.module';

import { DealsComponent,
         DealDetailComponent,
         DealService,
         DealRoute }   from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Angular2DataTableModule,
    DealRoute
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
