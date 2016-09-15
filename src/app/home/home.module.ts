import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent, HomeRoute }   from './index';

@NgModule({
  imports: [ CommonModule, FormsModule, HomeRoute ],
  exports: [ HomeComponent ],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
