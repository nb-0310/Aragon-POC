import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './components/sign/sign.component';
import { CreateDaoComponent } from './components/create-dao/create-dao.component';
import { GetDaoComponent } from './components/get-dao/get-dao.component';
import { GetProposalComponent } from './components/get-proposal/get-proposal.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { ProposalDetailsComponent } from './components/proposal-details/proposal-details.component';
import { VoteComponent } from './components/vote/vote.component';
import { CreateProposalComponent } from './components/create-proposal/create-proposal.component';

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    CreateDaoComponent,
    GetDaoComponent,
    GetProposalComponent,
    ProposalComponent,
    ProposalDetailsComponent,
    VoteComponent,
    CreateProposalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
