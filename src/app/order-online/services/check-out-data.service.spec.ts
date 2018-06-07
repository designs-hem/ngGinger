import { TestBed, inject } from '@angular/core/testing';

import { CheckOutDataService } from './check-out-data.service';

describe('CheckOutDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckOutDataService]
    });
  });

  it('should be created', inject([CheckOutDataService], (service: CheckOutDataService) => {
    expect(service).toBeTruthy();
  }));
});
