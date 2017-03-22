import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceWebUiPersonalAccountReferenceDetailComponent } from './personal-account-reference-detail.component';

describe('PersonalAccountReferenceDetailComponent', () => {
  let component: FinanceWebUiPersonalAccountReferenceDetailComponent;
  let fixture: ComponentFixture<FinanceWebUiPersonalAccountReferenceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceWebUiPersonalAccountReferenceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceWebUiPersonalAccountReferenceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
