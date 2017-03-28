import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceWebUiFinancingMarineMotorDetailComponent } from './financing-marine-motor-detail.component';

describe('FinancingMarineMotorDetailComponent', () => {
  let component: FinanceWebUiFinancingMarineMotorDetailComponent;
  let fixture: ComponentFixture<FinanceWebUiFinancingMarineMotorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceWebUiFinancingMarineMotorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceWebUiFinancingMarineMotorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
