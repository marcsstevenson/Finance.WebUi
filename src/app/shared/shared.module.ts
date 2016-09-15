import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
        //  FinanceWebUiFooterComponent,
        //  FinanceWebUiHeaderComponent,
        //  FinanceWebUiNavigationComponent,
         FinanceWebUiTimeLineComponent
        } from './components/index';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ FinanceWebUiTimeLineComponent],
  exports:      [ FinanceWebUiTimeLineComponent],
})
export class SharedModule { }