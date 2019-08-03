import { TestBed } from '@angular/core/testing';

import { BoardingService } from './boarding.service';

describe('BoardingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardingService = TestBed.get(BoardingService);
    expect(service).toBeTruthy();
  });
});
