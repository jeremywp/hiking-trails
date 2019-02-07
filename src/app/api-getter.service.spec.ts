import { TestBed } from '@angular/core/testing';

import { ApiGetterService } from './api-getter.service';

describe('ApiGetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiGetterService = TestBed.get(ApiGetterService);
    expect(service).toBeTruthy();
  });
});
