import { Component } from '@angular/core';
import { CreateProposalService } from '../../services/create-proposal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrl: './create-proposal.component.css',
})
export class CreateProposalComponent {
  proposalId: any;

  constructor(
    public createProposalService: CreateProposalService,
    private router: Router
  ) {}

  async submitProposal(event: Event) {
    event.preventDefault()
    try {
      this.proposalId = await this.createProposalService.createProposal();
    } catch (error) {
      console.error(error);
    }
  }

  navigateToGetProposal() {
    this.router.navigate(['/get-proposal']);
  }
}
