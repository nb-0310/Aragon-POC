import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './components/sign/sign.component';
import { CreateDaoComponent } from './components/create-dao/create-dao.component';
import { GetDaoComponent } from './components/get-dao/get-dao.component';
import { GetProposalComponent } from './components/get-proposal/get-proposal.component';
import { ProposalDetailsComponent } from './components/proposal-details/proposal-details.component';
import { CreateProposalComponent } from './components/create-proposal/create-proposal.component';
import { VoteComponent } from './components/vote/vote.component';

const routes: Routes = [
  { path: '', component: SignComponent },
  { path: 'create-dao', component: CreateDaoComponent },
  { path: 'get-dao', component: GetDaoComponent },
  { path: 'get-proposal', component: GetProposalComponent },
  { path: 'get-proposal/proposal-details', component: ProposalDetailsComponent },
  { path: 'get-proposal/create-proposal', component: CreateProposalComponent },
  { path: 'get-proposal/proposal-details/vote', component: VoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
