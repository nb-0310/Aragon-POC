import { Injectable } from '@angular/core';
import { SignService } from './sign.service';
import { GetProposalService } from './get-proposal.service';
import { TokenVotingClient, TokenVotingProposal } from '@aragon/sdk-client';

@Injectable({
  providedIn: 'root',
})
export class GetProposalDetailsService {
  constructor(
    public signService: SignService,
    public getProposalService: GetProposalService
  ) {}

  async getProposalDetails() {
    const tokenVotingClient: TokenVotingClient = new TokenVotingClient(
      this.signService.getContext()
    );

    const tokenVotingProposal: TokenVotingProposal | null =
      await tokenVotingClient.methods.getProposal(
        this.getProposalService.getProposalId()
      );

      return tokenVotingProposal
  }
}
