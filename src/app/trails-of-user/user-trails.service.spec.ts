import { TestBed } from '@angular/core/testing';

import { UserTrailsService } from './user-trails.service';

describe('UserTrailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserTrailsService = TestBed.get(UserTrailsService);
    expect(service).toBeTruthy();
  });
});
