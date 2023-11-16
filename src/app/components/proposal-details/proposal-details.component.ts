import { Component } from '@angular/core';
import { GetProposalDetailsService } from '../../services/get-proposal-details.service';
import { GetProposalService } from '../../services/get-proposal.service';
import { VoteService } from '../../services/vote.service';

@Component({
  selector: 'app-proposal-details',
  templateUrl: './proposal-details.component.html',
  styleUrl: './proposal-details.component.css'
})
export class ProposalDetailsComponent {
  proposalDetails: any;
  voteClicked: boolean = false;
  vote: any;

  constructor (public getProposalDetailsService: GetProposalDetailsService, public voteService: VoteService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProposalDetails ()
  }

  async getProposalDetails () {
    console.log('getProposal data called')
    this.proposalDetails = await this.getProposalDetailsService.getProposalDetails()
    console.log(this.getProposalDetailsService.propoasalDetails)
    return this.getProposalDetailsService.propoasalDetails
  }

  changeVote(event: Event) {
    this.vote = (event.target as HTMLSelectElement).value;
    // console.log(this.vote)
  }

  submitVote() {
    console.log(this.vote)
    this.voteService.vote(this.vote)
  }
}
