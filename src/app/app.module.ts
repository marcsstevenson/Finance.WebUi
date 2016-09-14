import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FinanceWebUiAppComponent } from './index';
import { routing,
         appRoutingProviders } from './app.routes';

@NgModule({
  declarations: [FinanceWebUiAppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    routing
    ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [FinanceWebUiAppComponent]
})
export class AppModule {}



// import { enableProdMode } from '@angular/core';
// import { disableDeprecatedForms, provideForms } from '@angular/forms';

// import { environment, FinanceWebUiAppComponent } from './app/';
// import { APP_ROUTER_PROVIDERS } from './app/app.routes';

// if (environment.production) {
//   enableProdMode();
// }

// bootstrap(FinanceWebUiAppComponent, [
//   disableDeprecatedForms(),
//   provideForms(),
//   APP_ROUTER_PROVIDERS
// ]);
