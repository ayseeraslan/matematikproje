import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaizproblemComponent } from './faizproblem.component';

describe('FaizproblemComponent', () => {
  let component: FaizproblemComponent;
  let fixture: ComponentFixture<FaizproblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaizproblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaizproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
