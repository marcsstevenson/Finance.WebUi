import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
        //  FinanceWebUiFooterComponent,
        //  FinanceWebUiHeaderComponent,
        //  FinanceWebUiNavigationComponent,
         FinanceWebUiSelectComponent,
         FinanceWebUiTimeLineComponent
        } from './components/index';

@NgModule({
  imports:      [ CommonModule, FormsModule],
  declarations: [ FinanceWebUiSelectComponent, FinanceWebUiTimeLineComponent],
  exports:      [ FinanceWebUiSelectComponent, FinanceWebUiTimeLineComponent],
})
export class SharedModule { }