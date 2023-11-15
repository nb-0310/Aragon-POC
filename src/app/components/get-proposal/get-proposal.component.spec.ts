import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProposalComponent } from './get-proposal.component';

describe('GetProposalComponent', () => {
  let component: GetProposalComponent;
  let fixture: ComponentFixture<GetProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetProposalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
