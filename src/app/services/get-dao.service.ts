import { Injectable } from '@angular/core';
import { Client, DaoDetails } from '@aragon/sdk-client';
import { SignService } from './sign.service';

@Injectable({
  providedIn: 'root',
})
export class GetDaoService {
  dao: any;

  constructor(public signService: SignService) {}

  async getDao(): Promise<DaoDetails | null> {
    // Instantiate the general purpose client from the Aragon OSx SDK context.
    const client: Client = new Client(this.signService.getContext());

    // Address or ENS of the DAO whose metadata you want to retrieve.
    const daoAddressOrEns: string =
      'poc-dao-0310-3.dao.eth'; // test.dao.eth

    // Get a DAO's details.
    const dao: DaoDetails | null = await client.methods.getDao(daoAddressOrEns);
    return dao
  }
}
