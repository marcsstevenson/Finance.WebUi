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
import { DealerModule } from './dealer/dealer.module';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './Login/index';
import { LoginModule } from './Login/login.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    CustomerModule,
    DealModule,
    DealerModule,
    HomeModule,
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
    // LoginComponent
    // FinanceWebUiTimeLineComponent
  ],
  bootstrap: [FinanceWebUiAppComponent]
})
export class AppModule {}
