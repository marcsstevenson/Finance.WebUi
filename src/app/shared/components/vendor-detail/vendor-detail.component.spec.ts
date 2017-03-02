import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceWebUiVendorDetailComponent } from './vendor-detail.component';

describe('VendorDetailComponent', () => {
  let component: FinanceWebUiVendorDetailComponent;
  let fixture: ComponentFixture<FinanceWebUiVendorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceWebUiVendorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceWebUiVendorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
