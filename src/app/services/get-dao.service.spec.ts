import { TestBed } from '@angular/core/testing';

import { GetDaoService } from './get-dao.service';

describe('GetDaoService', () => {
  let service: GetDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
