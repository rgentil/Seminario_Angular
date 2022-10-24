import { TestBed } from '@angular/core/testing';

import { BikeCartService } from './bike-cart.service';

describe('BikeCartService', () => {
  let service: BikeCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
