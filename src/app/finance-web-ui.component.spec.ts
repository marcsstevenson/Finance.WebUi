/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { FinanceWebUiAppComponent } from './finance-web-ui.component';

describe('Component: FinanceWebUi', () => {
  it('should create an instance', () => {
    let component = new FinanceWebUiAppComponent();
    expect(component).toBeTruthy();
  });

  it('should have as title \'finance-web-ui works!\'', () => {
    let component = new FinanceWebUiAppComponent();
    expect(component.title).toEqual('finance-web-ui works!');
  });
});
