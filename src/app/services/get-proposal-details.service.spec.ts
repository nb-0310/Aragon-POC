import { TestBed } from '@angular/core/testing';

import { GetProposalDetailsService } from './get-proposal-details.service';

describe('GetProposalDetailsService', () => {
  let service: GetProposalDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProposalDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
