/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { CustomersComponent } from './customers.component';

describe('Component: Customers', () => {
  it('should create an instance', () => {
    let component = new CustomersComponent();
    expect(component).toBeTruthy();
  });
});
