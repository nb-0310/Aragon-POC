import { TestBed } from '@angular/core/testing';

import { CreateDaoService } from './create-dao.service';

describe('CreateDaoService', () => {
  let service: CreateDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
