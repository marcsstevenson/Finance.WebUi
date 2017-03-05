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
         FinanceWebUiDatePickerComponent,
         FinanceWebUiPersonalOccupationComponent,
         FinanceWebUiPersonalFinancialDetailsComponent,
         FinanceWebUiFinancingVehicleDetailComponent,
         FinanceWebUiFinancingMotorcycleDetailComponent,
         FinanceWebUiTransportFinancialDetailsComponent,
         FinanceWebUiTradeMotorcycleDetailComponent,
         FinanceWebUiVendorDetailComponent
        } from './components/index';
import { FinancingMarineMotorDetailComponent } from './components/financing-marine-motor-detail/financing-marine-motor-detail.component';
import { FinancingMarineTrailerDetailComponent } from './components/financing-marine-trailer-detail/financing-marine-trailer-detail.component';


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
    FinanceWebUiDatePickerComponent,
    FinanceWebUiPersonalOccupationComponent,
    FinanceWebUiPersonalFinancialDetailsComponent,
    FinanceWebUiFinancingVehicleDetailComponent,
    FinanceWebUiFinancingMotorcycleDetailComponent,
    FinanceWebUiTransportFinancialDetailsComponent,
    TinyEditor,
    FinanceWebUiTradeMotorcycleDetailComponent,
    FinanceWebUiVendorDetailComponent,
    FinancingMarineMotorDetailComponent,
    FinancingMarineTrailerDetailComponent
    ],
  exports:      [
    FinanceWebUiSelectComponent,
    FinanceWebUiTimeLineComponent,
    FinanceWebUiAddressFinderComponent,
    FinanceWebUiPersonalDetailComponent,
    FinanceWebUiTradeVehicleDetailComponent,
    FinanceWebUiFinancingMarineDetailComponent,
    FinanceWebUTradeMarineDetailComponent,
    FinanceWebUiDatePickerComponent,
    FinanceWebUiPersonalOccupationComponent,
    FinanceWebUiPersonalFinancialDetailsComponent,
    FinanceWebUiFinancingVehicleDetailComponent,
    FinanceWebUiFinancingMotorcycleDetailComponent,
    FinanceWebUiTransportFinancialDetailsComponent,
    TinyEditor,
    FinanceWebUiTradeMotorcycleDetailComponent,
    FinanceWebUiVendorDetailComponent
    ],
})
export class SharedModule { }