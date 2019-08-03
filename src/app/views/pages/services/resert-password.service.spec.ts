import { TestBed } from '@angular/core/testing';

import { ResertPasswordService } from './resert-password.service';

describe('ResertPasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResertPasswordService = TestBed.get(ResertPasswordService);
    expect(service).toBeTruthy();
  });
});
