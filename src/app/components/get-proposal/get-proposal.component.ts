import { Component } from '@angular/core';
import { GetProposalService } from '../../services/get-proposal.service';

@Component({
  selector: 'app-get-proposal',
  templateUrl: './get-proposal.component.html',
  styleUrl: './get-proposal.component.css'
})
export class GetProposalComponent {
  proposals: any;

  constructor (public getProposalService: GetProposalService) { }

  async getProposals () {
    const p = await this.getProposalService.getProposals()
    this.proposals = p
  }
}
