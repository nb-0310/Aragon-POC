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
        minDuration: 60 * 60 * 24 * 2,
        minParticipation: 0.25,
        supportThreshold: 0.5,
        minProposerVotingPower: BigInt('5'),
        votingMode: VotingMode.EARLY_EXECUTION,
      },
      newToken: {
        name: 'Nirzar',
        symbol: 'NB',
        decimals: 18,
        minter: '',
        balances: [
          {
            address: '0x000e063943E9E8574EF5De947ea00Fb6Ca01B04F',
            balance: BigInt(90),
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
      ensSubdomain: 'my-dao-0310-03',
      plugins: [tokenVotingPluginInstallItem],
    };

    const estimatedGas: GasFeeEstimation = await client.estimation.createDao(
      createParams
    );
    console.log({ avg: estimatedGas.average, max: estimatedGas.max });

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

    return this.dao;
  }
}
