import { Injectable } from '@angular/core';
import { Context, TokenVotingClient, ProposalSortBy } from '@aragon/sdk-client';
import { SignService } from './sign.service';
import { ProposalStatus, SortDirection } from "@aragon/sdk-client-common";

@Injectable({
  providedIn: 'root',
})
export class GetProposalService {
  proposalId: string | undefined;
  proposals: any;

  constructor(public signService: SignService) {}

  async gettingProposals(addr: string) {
    const tokenVotingClient = new TokenVotingClient(
      this.signService.getContext()
    );

    const getProposals = await tokenVotingClient.methods.getProposals({
      daoAddressOrEns: addr
    });

    // {
    //   daoAddressOrEns: '0xdd0c8e1c1d6209788ba3c9f7ca5fa9e92e70f876',
    // }

    return getProposals
  }

  async getProposals(addr: string) {
    const p = await this.gettingProposals(addr);
    this.proposals = p;
    return p
  }

  setProposalId(id: string): void {
    this.proposalId = id;
  }

  getProposalId(): any {
    return this.proposalId;
  }
}
