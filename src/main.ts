import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment, FinanceWebUiAppComponent } from './app/';


if (environment.production) {
  enableProdMode();
}

bootstrap(FinanceWebUiAppComponent);
