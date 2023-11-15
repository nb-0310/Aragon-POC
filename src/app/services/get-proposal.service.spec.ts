import { TestBed } from '@angular/core/testing';

import { GetProposalService } from './get-proposal.service';

describe('GetProposalService', () => {
  let service: GetProposalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProposalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
