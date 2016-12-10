import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent, HomeRoutingModule }   from './index';

@NgModule({
  imports: [ CommonModule, FormsModule, HomeRoutingModule ],
  exports: [ HomeComponent ],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
