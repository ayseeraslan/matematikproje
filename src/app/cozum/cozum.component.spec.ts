import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozumComponent } from './cozum.component';

describe('CozumComponent', () => {
  let component: CozumComponent;
  let fixture: ComponentFixture<CozumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CozumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CozumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
