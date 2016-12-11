import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import './rxjs-operators';

import { FinanceWebUiAppComponent } from './index';

import {
  FinanceWebUiHeaderComponent,
  FinanceWebUiFooterComponent,
  FinanceWebUiNavigationComponent
} from './shared/components/index';

import { AppRoutingModule,
         appRoutingProviders } from './app-routing.module';

import { CustomerModule } from './customer/customer.module';
import { DealModule } from './deal/deal.module';
import { DealerModule } from './dealer/dealer.module';
import { FinanceCompanyModule } from './finance-company/finance-company.module';
import { HomeModule } from './home/home.module';
import { ApplicationModule } from './application/application.module';
import { LoginModule } from './login/login.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    LoginModule,
    CustomerModule,
    DealModule,
    DealerModule,
    HomeModule,
    ApplicationModule,
    FinanceCompanyModule,
    AppRoutingModule
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
export class AppModule { }
