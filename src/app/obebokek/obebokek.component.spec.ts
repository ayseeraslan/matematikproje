import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObebokekComponent } from './obebokek.component';

describe('ObebokekComponent', () => {
  let component: ObebokekComponent;
  let fixture: ComponentFixture<ObebokekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObebokekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObebokekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
