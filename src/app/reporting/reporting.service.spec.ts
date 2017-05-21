/* tslint:disable:no-unused-variable */

import { async, inject } from '@angular/core/testing';
import { MonthlyTotalsService } from "app/reporting";

describe('Service: LeadOrigin', () => {
  beforeEach(() => {
    // addProviders([LeadOriginService]);
  });

  it('should ...',
    inject([MonthlyTotalsService],
      (service: MonthlyTotalsService) => {
        expect(service).toBeTruthy();
      }));
});
