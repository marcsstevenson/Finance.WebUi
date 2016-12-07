import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Angular2DataTableModule } from 'angular2-data-table';

import { SharedModule } from '../shared/shared.module';

import { DealersComponent,
         DealerDetailComponent,
         DealerService,
         DealerRoute }   from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Angular2DataTableModule,
    SharedModule,
    DealerRoute
    ],
  exports: [ DealersComponent, DealerDetailComponent],
  declarations: [ DealersComponent, DealerDetailComponent ],
  providers: [ DealerService ],
})
export class PfDealerModule { }
