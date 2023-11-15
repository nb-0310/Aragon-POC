import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDaoComponent } from './create-dao.component';

describe('CreateDaoComponent', () => {
  let component: CreateDaoComponent;
  let fixture: ComponentFixture<CreateDaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateDaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
