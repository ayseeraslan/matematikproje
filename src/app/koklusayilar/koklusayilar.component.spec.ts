import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoklusayilarComponent } from './koklusayilar.component';

describe('KoklusayilarComponent', () => {
  let component: KoklusayilarComponent;
  let fixture: ComponentFixture<KoklusayilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoklusayilarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoklusayilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
