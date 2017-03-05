import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingMarineTrailerDetailComponent } from './financing-marine-trailer-detail.component';

describe('FinancingMarineTrailerDetailComponent', () => {
  let component: FinancingMarineTrailerDetailComponent;
  let fixture: ComponentFixture<FinancingMarineTrailerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancingMarineTrailerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancingMarineTrailerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
