import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FinanceWebUiAppComponent } from './index';

import {
  FinanceWebUiHeaderComponent,
  FinanceWebUiFooterComponent,
  FinanceWebUiNavigationComponent,
  // FinanceWebUiTimeLineComponent
} from './shared/components/index';

import { routing,
         appRoutingProviders } from './app.routes';

import { CustomerModule } from './customer/customer.module';
import { DealModule } from './deal/deal.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CustomerModule,
    DealModule,
    routing
    ],
  providers: [
    appRoutingProviders
  ],
  declarations: [
    FinanceWebUiAppComponent,
    FinanceWebUiHeaderComponent,
    FinanceWebUiFooterComponent,
    FinanceWebUiNavigationComponent,
    // FinanceWebUiTimeLineComponent
  ],
  bootstrap: [FinanceWebUiAppComponent]
})
export class AppModule {}
