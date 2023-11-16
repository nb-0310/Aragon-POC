import { Component } from '@angular/core';
import { GetProposalService } from '../../services/get-proposal.service';

@Component({
  selector: 'app-get-proposal',
  templateUrl: './get-proposal.component.html',
  styleUrl: './get-proposal.component.css'
})
export class GetProposalComponent {
  proposals: any;
  daoAddress: any = '0x44d2d815246b4fd6f5a52b1db2d9df71973adf74';

  constructor (public getProposalService: GetProposalService) { }

  async getProposals () {
    const p = await this.getProposalService.getProposals(this.daoAddress)
    this.proposals = p
  }
}
