import { Injectable } from '@angular/core';
import { Client, DaoDetails } from '@aragon/sdk-client';
import { TokenVotingClient, TokenVotingMember } from '@aragon/sdk-client';
import { SignService } from './sign.service';

@Injectable({
  providedIn: 'root',
})
export class GetDaoService {
  constructor(public signService: SignService) {}

  async getDao(addr: string): Promise<DaoDetails | null> {
    const client: Client = new Client(this.signService.getContext());
    const daoAddressOrEns: string = addr;
    const dao: DaoDetails | null = await client.methods.getDao(daoAddressOrEns);
    return dao;
  }

  async getMembers(daoAddress: string) {
    const dao: DaoDetails | null = await this.getDao(daoAddress);

    // console.log(dao)

    if (!dao) {
      console.error('Error fetching DAO details.');
      return null;
    }

    const pluginAddress: any = dao?.plugins[0].instanceAddress;
    console.log(pluginAddress);
    const tokenVotingClient: TokenVotingClient = new TokenVotingClient(
      this.signService.getContext()
    );

    // console.log(tokenVotingClient)

    // console.log(TokenVotingMember)
    try {
      const members: TokenVotingMember[] =
        await tokenVotingClient.methods.getMembers({
          pluginAddress: pluginAddress
        });
      return members;
    } catch (error) {
      console.error('Error fetching members:', error);
      return null;
    }
  }
}
