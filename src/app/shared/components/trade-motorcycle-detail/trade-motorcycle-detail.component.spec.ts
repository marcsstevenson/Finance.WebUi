import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeMotorcycleDetailComponent } from './trade-motorcycle-detail.component';

describe('TradeMotorcycleDetailComponent', () => {
  let component: TradeMotorcycleDetailComponent;
  let fixture: ComponentFixture<TradeMotorcycleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeMotorcycleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeMotorcycleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
