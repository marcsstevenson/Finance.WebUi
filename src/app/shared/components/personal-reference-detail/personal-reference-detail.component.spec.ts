import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceWebUiPersonalReferenceDetailComponent } from './personal-reference-detail.component';

describe('PersonalReferenceDetailComponent', () => {
  let component: FinanceWebUiPersonalReferenceDetailComponent;
  let fixture: ComponentFixture<FinanceWebUiPersonalReferenceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceWebUiPersonalReferenceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceWebUiPersonalReferenceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
