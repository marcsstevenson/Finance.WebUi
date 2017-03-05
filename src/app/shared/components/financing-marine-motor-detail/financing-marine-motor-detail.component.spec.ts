import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingMarineMotorDetailComponent } from './financing-marine-motor-detail.component';

describe('FinancingMarineMotorDetailComponent', () => {
  let component: FinancingMarineMotorDetailComponent;
  let fixture: ComponentFixture<FinancingMarineMotorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancingMarineMotorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancingMarineMotorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
