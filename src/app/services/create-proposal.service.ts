import { Injectable } from '@angular/core';
import {
  CreateMajorityVotingProposalParams,
  ProposalCreationSteps,
  TokenVotingClient,
  VoteValues,
} from '@aragon/sdk-client';
import { SignService } from './sign.service';

@Injectable({
  providedIn: 'root',
})
export class CreateProposalService {
  proposalId: any
  constructor(public signService: SignService) {}

  async createProposal() {
    const tokenVotingClient: TokenVotingClient = new TokenVotingClient(
      this.signService.getContext()
    );

    const metadataUri: string =
      'ipfs://QmdHyK17N4rvR5gACTXQdTKrL3cVQeD5xErhsjrR5ptcmZ';

    const pluginAddress: string = '0x3d9284820a44677da7d0c6565249637f9c3000c7';

    const proposalParams: CreateMajorityVotingProposalParams = {
      pluginAddress,
      metadataUri,
      actions: [],
      startDate: new Date(0),
      endDate: new Date(0),
      executeOnPass: false,
      // creatorVote: VoteValues.YES,
    };

    // Create a proposal where members participate through token voting.
    const steps = tokenVotingClient.methods.createProposal(proposalParams);

    for await (const step of steps) {
      try {
        switch (step.key) {
          case ProposalCreationSteps.CREATING:
            console.log({ txHash: step.txHash });
            break;
          case ProposalCreationSteps.DONE:
            console.log({ proposalId: step.proposalId });
            this.proposalId = step.proposalId
            break;
        }
      } catch (err) {
        console.error(err);
      }
    }

    return this.proposalId
  }
}