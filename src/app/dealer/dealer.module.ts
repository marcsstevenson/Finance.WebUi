import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { DealersComponent,
         DealerDetailComponent,
         DealerService,
         DealerRoute }   from './index';

@NgModule({
  imports: [ CommonModule, FormsModule, SharedModule, DealerRoute],
  exports: [ DealersComponent, DealerDetailComponent],
  declarations: [ DealersComponent, DealerDetailComponent ],
  providers: [ DealerService ],
})
export class DealerModule { }
