import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleFormComponent } from './motorcycle-form.component';

describe('MotorcycleFormComponent', () => {
  let component: MotorcycleFormComponent;
  let fixture: ComponentFixture<MotorcycleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorcycleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcycleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
