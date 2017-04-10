import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  FinanceWebUiVendorDetailComponent,
  FinanceWebUiFinancingMarineMotorDetailComponent,
  FinanceWebUiFinancingMarineTrailerDetailComponent,
  FinanceWebUiPersonalAccountReferenceDetailComponent,
  FinanceWebUiPersonalAccountReferencesComponent,
  FinanceWebUiPersonalReferenceDetailComponent,
  FinanceWebUiPersonalReferencesComponent,
  FinanceWebUiWorkingDisplayComponent
} from './components/index';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DatepickerModule],
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
    FinanceWebUiFinancingMarineMotorDetailComponent,
    FinanceWebUiFinancingMarineTrailerDetailComponent,
    FinanceWebUiPersonalAccountReferenceDetailComponent,
    FinanceWebUiPersonalAccountReferencesComponent,
    FinanceWebUiPersonalReferenceDetailComponent,
    FinanceWebUiPersonalReferencesComponent,
    FinanceWebUiWorkingDisplayComponent
  ],
  exports: [
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
    FinanceWebUiFinancingMarineMotorDetailComponent,
    FinanceWebUiFinancingMarineTrailerDetailComponent,
    FinanceWebUiPersonalAccountReferenceDetailComponent,
    FinanceWebUiPersonalAccountReferencesComponent,
    FinanceWebUiPersonalReferenceDetailComponent,
    FinanceWebUiPersonalReferencesComponent,
    FinanceWebUiWorkingDisplayComponent
  ],
})
export class SharedModule { }