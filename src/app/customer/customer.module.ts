import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CustomersComponent,
         CustomerDetailComponent,
         CustomerDealsComponent,
         CustomerService,
         CustomerRoute }   from './index';

@NgModule({
  imports: [ CommonModule, FormsModule, SharedModule, CustomerRoute],
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
