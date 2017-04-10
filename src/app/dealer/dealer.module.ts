import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Angular2DataTableModule } from 'angular2-data-table';

import { SharedModule } from '../shared/shared.module';

import { DealersComponent,
         DealerDetailComponent,
         DealerService,
         DealerRouteModule }   from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Angular2DataTableModule,
    SharedModule,
    DealerRouteModule
    ],
  exports: [ DealersComponent, DealerDetailComponent],
  declarations: [ DealersComponent, DealerDetailComponent ],
  providers: [ DealerService ],
})
export class DealerModule { }
