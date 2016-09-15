import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { DealsComponent,
         DealDetailComponent,
         DealService,
         DealRoute }   from './index';

@NgModule({
  imports: [ CommonModule, FormsModule, SharedModule, DealRoute],
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
