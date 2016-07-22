/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { FinanceWebUiHeaderComponent } from './header.component';

describe('Component: Header', () => {
  it('should create an instance', () => {
    let component = new FinanceWebUiHeaderComponent();
    expect(component).toBeTruthy();
  });
});
