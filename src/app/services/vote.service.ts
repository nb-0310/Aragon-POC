import { Injectable } from '@angular/core';
import {
  TokenVotingClient,
  VoteProposalParams,
  VoteProposalStep,
  VoteValues,
} from '@aragon/sdk-client';
import { SignService } from './sign.service';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  constructor(public signService: SignService) {}

  async vote(voteVal: string): Promise<void> {
    const tokenVotingClient: TokenVotingClient = new TokenVotingClient(
      this.signService.getContext()
    );

    const voteParams: VoteProposalParams = {
      proposalId: '0x3d9284820a44677da7d0c6565249637f9c3000c7_0x9',
      vote:
        voteVal === 'yes'
          ? VoteValues.YES
          : voteVal === 'no'
          ? VoteValues.NO
          : VoteValues.ABSTAIN, // alternatively NO, or ABSTAIN
    };

    // Creates a vote on a given proposal created by the token voting governance mechanism.
    const steps = tokenVotingClient.methods.voteProposal(voteParams);

    for await (const step of steps) {
      try {
        switch (step.key) {
          case VoteProposalStep.VOTING:
            console.log({ txHash: step.txHash });
            break;
          case VoteProposalStep.DONE:
            break;
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
}
