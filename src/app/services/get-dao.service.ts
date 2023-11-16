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
      '0x44d2d815246b4fd6f5a52b1db2d9df71973adf74'; // test.dao.eth

    // Get a DAO's details.
    const dao: DaoDetails | null = await client.methods.getDao(daoAddressOrEns);
    return dao
  }
}
