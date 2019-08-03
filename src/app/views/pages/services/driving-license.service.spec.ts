import { TestBed } from '@angular/core/testing';

import { DrivingLicenseService } from './driving-license.service';

describe('DrivingLicenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrivingLicenseService = TestBed.get(DrivingLicenseService);
    expect(service).toBeTruthy();
  });
});
