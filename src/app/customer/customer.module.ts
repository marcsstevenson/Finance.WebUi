import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular2DataTableModule } from 'angular2-data-table';

import { SharedModule } from '../shared/shared.module';

import { CustomersComponent,
         CustomerDetailComponent,
         CustomerDealsComponent,
         CustomerService,
         CustomerRoutingModule }   from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    Angular2DataTableModule,
    CustomerRoutingModule
  ],
  declarations: [
    CustomersComponent,
    CustomerDetailComponent,
    CustomerDealsComponent
  ],
  exports: [
    CustomersComponent,
    CustomerDetailComponent,
    CustomerDealsComponent
  ],
  providers: [CustomerService]
})
export class CustomerModule { }
