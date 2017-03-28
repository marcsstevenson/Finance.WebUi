import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceWebUiTradeMotorcycleDetailComponent } from './trade-motorcycle-detail.component';

describe('FinanceWebUiTradeMotorcycleDetailComponent', () => {
  let component: FinanceWebUiTradeMotorcycleDetailComponent;
  let fixture: ComponentFixture<FinanceWebUiTradeMotorcycleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceWebUiTradeMotorcycleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceWebUiTradeMotorcycleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
