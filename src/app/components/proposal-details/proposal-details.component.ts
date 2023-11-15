import { Component } from '@angular/core';
import { GetProposalDetailsService } from '../../services/get-proposal-details.service';

@Component({
  selector: 'app-proposal-details',
  templateUrl: './proposal-details.component.html',
  styleUrl: './proposal-details.component.css'
})
export class ProposalDetailsComponent {
  proposalDetails: any;

  constructor (public getProposalDetailsService: GetProposalDetailsService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProposalDetails ()
  }

  getProposalDetails () {
    this.proposalDetails = this.getProposalDetailsService.getProposalDetails()
    console.log(this.proposalDetails)
    return this.getProposalDetails
  }
}
