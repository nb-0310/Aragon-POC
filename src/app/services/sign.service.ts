import { Injectable } from '@angular/core';
import { Context, ContextParams } from '@aragon/sdk-client';
import { ethers, Wallet } from 'ethers';

interface CustomWindow extends Window {
  ethereum?: any;
}

@Injectable({
  providedIn: 'root',
})
export class SignService {
  private context: any;
  private signer: any;

  constructor() {}

  async connectToWeb3(): Promise<void> {
    try {
      const customWindow = window as CustomWindow;

      if (customWindow.ethereum) {
        // Request account access
        const accounts = await customWindow.ethereum.request({
          method: 'eth_requestAccounts',
        });

        // console.log(accounts);

        const provider = new ethers.providers.Web3Provider(
          customWindow.ethereum
        );

        // Create a signer using the first account's private key
        await provider.send('eth_requestAccounts', []);
        this.signer = provider.getSigner(); // Assign signer to this.signer
        // console.log('Signer', this.signer);

        // Now `this.signer` can be used to sign transactions
        // console.log('Signer address:', await this.signer.getAddress());
      } else {
        console.error('Ethereum provider not detected');
      }
    } catch (error) {
      console.error('Error connecting to Ethereum provider:', error);
    }
  }

  createContext(): void {
    const IPFS_API_KEY = 'b477RhECf8s8sdM7XrkLBs2wHc4kCMwpbcFC55Kt';
    this.connectToWeb3();

    const contextParams: ContextParams = {
      network: 'goerli',
      signer: this.signer,
      daoFactoryAddress: '',
      ensRegistryAddress: '',
      web3Providers: ['https://rpc.ankr.com/eth_goerli'],
      ipfsNodes: [
        {
          url: 'https://test.ipfs.aragon.network/api/v0',
          headers: { 'X-API-KEY': IPFS_API_KEY || '' },
        },
      ],
    };

    this.context = new Context(contextParams);
    console.log(contextParams.signer);
    // console.error('Private key cannot be empty.');
  }

  getContext(): Context {
    this.createContext();
    return this.context;
  }

  getSigner(): any {
    this.connectToWeb3();
    return this.signer;
  }
}
