import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FinanceWebUiAppComponent } from '../app/finance-web-ui.component';

beforeEachProviders(() => [FinanceWebUiAppComponent]);

describe('App: FinanceWebUi', () => {
  it('should create the app',
      inject([FinanceWebUiAppComponent], (app: FinanceWebUiAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'finance-web-ui works!\'',
      inject([FinanceWebUiAppComponent], (app: FinanceWebUiAppComponent) => {
    expect(app.title).toEqual('finance-web-ui works!');
  }));
});
