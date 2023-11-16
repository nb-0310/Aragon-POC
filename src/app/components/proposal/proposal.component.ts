import { Component, Input } from '@angular/core';
import { GetProposalService } from '../../services/get-proposal.service';
import {GetProposalDetailsService} from "../../services/get-proposal-details.service"

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.css'
})
export class ProposalComponent {
  @Input() item: any;

  constructor (public getProposalService: GetProposalService, public getProposalDetailService:GetProposalDetailsService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.item)
  }

  changeProposalId (id: string) {
    this.getProposalService.setProposalId(id)
  } 
}
