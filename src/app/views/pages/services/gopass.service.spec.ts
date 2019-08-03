import { TestBed } from '@angular/core/testing';

import { GopassService } from './gopass.service';

describe('GopassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GopassService = TestBed.get(GopassService);
    expect(service).toBeTruthy();
  });
});
