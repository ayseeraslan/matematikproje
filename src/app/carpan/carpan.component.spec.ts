import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpanComponent } from './carpan.component';

describe('CarpanComponent', () => {
  let component: CarpanComponent;
  let fixture: ComponentFixture<CarpanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
