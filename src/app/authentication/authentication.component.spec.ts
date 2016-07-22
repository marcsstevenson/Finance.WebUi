/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { AuthenticationComponent } from './authentication.component';

describe('Component: Authentication', () => {
  it('should create an instance', () => {
    let component = new AuthenticationComponent();
    expect(component).toBeTruthy();
  });
});
