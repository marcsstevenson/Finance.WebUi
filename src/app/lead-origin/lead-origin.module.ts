import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Angular2DataTableModule } from 'angular2-data-table';

import { SharedModule } from '../shared/shared.module';

import { LeadOriginsComponent,
         LeadOriginDetailComponent,
         LeadOriginService,
         LeadOriginRouteModule }   from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Angular2DataTableModule,
    SharedModule,
    LeadOriginRouteModule
    ],
  exports: [ LeadOriginsComponent, LeadOriginDetailComponent],
  declarations: [ LeadOriginsComponent, LeadOriginDetailComponent ],
  providers: [ LeadOriginService ],
})
export class LeadOriginModule { }
