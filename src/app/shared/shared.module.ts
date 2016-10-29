import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
        //  FinanceWebUiFooterComponent,
        //  FinanceWebUiHeaderComponent,
        //  FinanceWebUiNavigationComponent,
         FinanceWebUiSelectComponent,
         FinanceWebUiTimeLineComponent,
         FinanceWebUiAddressFinderComponent
        } from './components/index';

@NgModule({
  imports:      [ CommonModule, FormsModule],
  declarations: [ FinanceWebUiSelectComponent, FinanceWebUiTimeLineComponent, FinanceWebUiAddressFinderComponent],
  exports:      [ FinanceWebUiSelectComponent, FinanceWebUiTimeLineComponent, FinanceWebUiAddressFinderComponent],
})
export class SharedModule { }