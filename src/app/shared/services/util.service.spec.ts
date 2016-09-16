/* tslint:disable:no-unused-variable */

import { async, inject } from '@angular/core/testing';
import { UtilService } from './util.service';

describe('Service: Util', () => {
  beforeEach(() => {
    // addProviders([UtilService]);
  });

  it('should ...',
    inject([UtilService],
      (service: UtilService) => {
        expect(service).toBeTruthy();
      }));
});
