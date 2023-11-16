import { Injectable } from '@angular/core';
import {
  Client,
  CreateDaoParams,
  DaoCreationSteps,
  DaoMetadata,
  TokenVotingClient,
  TokenVotingPluginInstall,
  VotingMode,
} from '@aragon/sdk-client';
import { GasFeeEstimation } from '@aragon/sdk-client-common';
import { SignService } from './sign.service';

@Injectable({
  providedIn: 'root',
})
export class CreateDaoService {
  dao: any;
  constructor(public signService: SignService) {}

  async createDao() {
    const client: Client = new Client(this.signService.getContext());

    const tokenVotingPluginInstallParams: TokenVotingPluginInstall = {
      votingSettings: {
        minDuration: 60 * 60 * 24 * 2, // seconds (minimum amount is 3600)
        minParticipation: 0.25, // 25%
        supportThreshold: 0.5, // 50%
        minProposerVotingPower: BigInt('5'), // default 0
        votingMode: VotingMode.EARLY_EXECUTION, // default is STANDARD. other options: EARLY_EXECUTION, VOTE_REPLACEMENT
      },
      newToken: {
        name: 'Nirzar', // the name of your token
        symbol: 'NB', // the symbol for your token. shouldn't be more than 5 letters
        decimals: 18, // the number of decimals your token uses
        minter: '', // optional. if you don't define any, we'll use the standard OZ ERC20 contract. Otherwise, you can define your own token minter contract address.
        balances: [
          {
            // Defines the initial balances of the new token
            address: '0x000e063943E9E8574EF5De947ea00Fb6Ca01B04F', // address of the account to receive the newly minted tokens
            balance: BigInt(90), // amount of tokens that address should receive
          },
          {
            address: '0xb566718bb475dafDa4eE67BB8077E5987f678381',
            balance: BigInt(60),
          },
        ],
      },
    };

    const tokenVotingPluginInstallItem =
      TokenVotingClient.encoding.getPluginInstallItem(
        tokenVotingPluginInstallParams,
        'goerli'
      );

    const metadataUri: string =
      'ipfs://QmNzKMDjJLouQpCKEiLRKKAgWkUe71ADY74TfvYi92B2E7';

    const createParams: CreateDaoParams = {
      metadataUri,
      ensSubdomain: 'my-org', // my-org.dao.eth
      plugins: [tokenVotingPluginInstallItem], // optional, this will determine the plugins installed in your DAO upon creation. 1 is mandatory, more than that is optional based on the DAO's needs.
    };

    // Estimate how much gas the transaction will cost.
    const estimatedGas: GasFeeEstimation = await client.estimation.createDao(
      createParams
    );
    console.log({ avg: estimatedGas.average, max: estimatedGas.max });

    // Create the DAO with the two token voting plugins installed. This means that the DAO will be able to use either of the two tokens to vote depending on which TokenVoting plugin created the proposal.
    const steps = client.methods.createDao(createParams);

    for await (const step of steps) {
      try {
        switch (step.key) {
          case DaoCreationSteps.CREATING:
            console.log({ txHash: step.txHash });
            break;
          case DaoCreationSteps.DONE:
            console.log({
              daoAddress: step.address,
              pluginAddresses: step.pluginAddresses,
            });
            this.dao = {
              daoAddress: step.address,
              pluginAddresses: step.pluginAddresses,
            };
            break;
        }
      } catch (err) {
        console.error(err);
      }
    }

    return this.dao
  }
}
