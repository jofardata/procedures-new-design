import { TestBed } from '@angular/core/testing';

import { FreightService } from './freight.service';

describe('FreightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreightService = TestBed.get(FreightService);
    expect(service).toBeTruthy();
  });
});
