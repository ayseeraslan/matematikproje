import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsitsizlikComponent } from './esitsizlik.component';

describe('EsitsizlikComponent', () => {
  let component: EsitsizlikComponent;
  let fixture: ComponentFixture<EsitsizlikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsitsizlikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsitsizlikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
