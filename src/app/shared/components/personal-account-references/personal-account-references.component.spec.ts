import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceWebUiPersonalAccountReferencesComponent } from './personal-account-references.component';

describe('FinanceWebUiPersonalAccountReferencesComponent', () => {
  let component: FinanceWebUiPersonalAccountReferencesComponent;
  let fixture: ComponentFixture<FinanceWebUiPersonalAccountReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceWebUiPersonalAccountReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceWebUiPersonalAccountReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
