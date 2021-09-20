import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UslusayilarComponent } from './uslusayilar.component';

describe('UslusayilarComponent', () => {
  let component: UslusayilarComponent;
  let fixture: ComponentFixture<UslusayilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UslusayilarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UslusayilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
