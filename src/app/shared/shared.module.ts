import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { TinyEditor } from './directives/index';

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
         FinanceWebUiPersonalOccupationComponent,
         FinanceWebUiPersonalFinancialDetailsComponent,
         FinanceWebUiFinancingVehicleDetailComponent,
         FinanceWebUiFinancingMotorcycleDetailComponent,
         FinanceWebUiTransportFinancialDetailsComponent
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
    FinanceWebUiPersonalOccupationComponent,
    FinanceWebUiPersonalFinancialDetailsComponent,
    FinanceWebUiFinancingVehicleDetailComponent,
    FinanceWebUiFinancingMotorcycleDetailComponent,
    FinanceWebUiTransportFinancialDetailsComponent,
    TinyEditor
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
    FinanceWebUiPersonalOccupationComponent,
    FinanceWebUiPersonalFinancialDetailsComponent,
    FinanceWebUiFinancingVehicleDetailComponent,
    FinanceWebUiFinancingMotorcycleDetailComponent,
    FinanceWebUiTransportFinancialDetailsComponent,
    TinyEditor
    ],
})
export class SharedModule { }