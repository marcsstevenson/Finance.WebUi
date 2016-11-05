import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
        //  FinanceWebUiFooterComponent,
        //  FinanceWebUiHeaderComponent,
        //  FinanceWebUiNavigationComponent,
         FinanceWebUiSelectComponent,
         FinanceWebUiTimeLineComponent,
         FinanceWebUiAddressFinderComponent,
         FinanceWebUiPersonalDetailComponent,
         FinanceWebUiTradeVehicleDetailComponent
        } from './components/index';

@NgModule({
  imports:      [ CommonModule, FormsModule],
  declarations: [
    FinanceWebUiSelectComponent,
    FinanceWebUiTimeLineComponent,
    FinanceWebUiAddressFinderComponent,
    FinanceWebUiPersonalDetailComponent,
    FinanceWebUiTradeVehicleDetailComponent
    ],
  exports:      [
    FinanceWebUiSelectComponent,
    FinanceWebUiTimeLineComponent,
    FinanceWebUiAddressFinderComponent,
    FinanceWebUiPersonalDetailComponent,
    FinanceWebUiTradeVehicleDetailComponent
    ],
})
export class SharedModule { }