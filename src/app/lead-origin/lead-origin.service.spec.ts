/* tslint:disable:no-unused-variable */

import { async, inject } from '@angular/core/testing';
import { LeadOriginService } from './lead-origin.service';

describe('Service: LeadOrigin', () => {
  beforeEach(() => {
    // addProviders([LeadOriginService]);
  });

  it('should ...',
    inject([LeadOriginService],
      (service: LeadOriginService) => {
        expect(service).toBeTruthy();
      }));
});
