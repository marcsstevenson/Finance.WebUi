/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { CustomerDetailComponent } from './customer-detail.component';

describe('Component: CustomerDetail', () => {
  it('should create an instance', () => {
    let component = new CustomerDetailComponent();
    expect(component).toBeTruthy();
  });
});
