import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceWebUiPersonalReferencesComponent } from './personal-references.component';

describe('PersonalReferencesComponent', () => {
  let component: FinanceWebUiPersonalReferencesComponent;
  let fixture: ComponentFixture<FinanceWebUiPersonalReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceWebUiPersonalReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceWebUiPersonalReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
