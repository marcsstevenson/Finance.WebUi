import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment, FinanceWebUiAppComponent } from './app/';
import {disableDeprecatedForms, provideForms} from '@angular/forms';


if (environment.production) {
  enableProdMode();
}

bootstrap(FinanceWebUiAppComponent, [
  disableDeprecatedForms(),
  provideForms(),
]);
