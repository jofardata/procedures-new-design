import { TestBed } from '@angular/core/testing';

import { VignetteService } from './vignette.service';

describe('VignetteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VignetteService = TestBed.get(VignetteService);
    expect(service).toBeTruthy();
  });
});
