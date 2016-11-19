import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatepickerModule } from 'ng2-bootstrap/components/datepicker';

import {
        //  FinanceWebUiFooterComponent,
        //  FinanceWebUiHeaderComponent,
        //  FinanceWebUiNavigationComponent,
         FinanceWebUiSelectComponent,
         FinanceWebUiTimeLineComponent,
         FinanceWebUiAddressFinderComponent,
         FinanceWebUiPersonalDetailComponent,
         FinanceWebUiTradeVehicleDetailComponent,
         FinanceWebUiFinancingMarineDetailComponent,
         FinanceWebUTradeMarineDetailComponent,
         FinanceWebUiTraderDetailComponent,
         FinanceWebUiDatePickerComponent,
         FinanceWebUiPersonalOccupationComponent
        } from './components/index';

@NgModule({
  imports:      [ CommonModule, FormsModule, DatepickerModule],
  declarations: [
    FinanceWebUiSelectComponent,
    FinanceWebUiTimeLineComponent,
    FinanceWebUiAddressFinderComponent,
    FinanceWebUiPersonalDetailComponent,
    FinanceWebUiTradeVehicleDetailComponent,
    FinanceWebUiFinancingMarineDetailComponent,
    FinanceWebUTradeMarineDetailComponent,
    FinanceWebUiTraderDetailComponent,
    FinanceWebUiDatePickerComponent,
    FinanceWebUiPersonalOccupationComponent
    ],
  exports:      [
    FinanceWebUiSelectComponent,
    FinanceWebUiTimeLineComponent,
    FinanceWebUiAddressFinderComponent,
    FinanceWebUiPersonalDetailComponent,
    FinanceWebUiTradeVehicleDetailComponent,
    FinanceWebUiFinancingMarineDetailComponent,
    FinanceWebUTradeMarineDetailComponent,
    FinanceWebUiTraderDetailComponent,
    FinanceWebUiDatePickerComponent,
    FinanceWebUiPersonalOccupationComponent
    ],
})
export class SharedModule { }