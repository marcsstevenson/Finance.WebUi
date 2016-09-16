/* tslint:disable:no-unused-variable */

import { async, inject } from '@angular/core/testing';
import { DealerService } from './dealer.service';

describe('Service: Dealer', () => {
  beforeEach(() => {
    // addProviders([DealerService]);
  });

  it('should ...',
    inject([DealerService],
      (service: DealerService) => {
        expect(service).toBeTruthy();
      }));
});
