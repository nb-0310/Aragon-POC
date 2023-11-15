import { Injectable } from '@angular/core';
import { Context, TokenVotingClient } from "@aragon/sdk-client";
import { SignService } from './sign.service';

@Injectable({
  providedIn: 'root'
})
export class GetProposalService {
  proposals: any;

  constructor(public signService: SignService) { }

  async gettingProposals () {
    const tokenVotingClient = new TokenVotingClient(this.signService.getContext());

    const getProposals = await tokenVotingClient.methods.getProposals({
      daoAddressOrEns: '0x44d2d815246b4fd6f5a52b1db2d9df71973adf74',
    });

    this.proposals = getProposals
  }

  async getProposals () {
    await this.gettingProposals()
    return this.proposals 
  }
}
