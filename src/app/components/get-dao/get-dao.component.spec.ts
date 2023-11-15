import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDaoComponent } from './get-dao.component';

describe('GetDaoComponent', () => {
  let component: GetDaoComponent;
  let fixture: ComponentFixture<GetDaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetDaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetDaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
