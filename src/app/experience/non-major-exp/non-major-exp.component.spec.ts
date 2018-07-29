import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMajorExpComponent } from './non-major-exp.component';

describe('NonMajorExpComponent', () => {
  let component: NonMajorExpComponent;
  let fixture: ComponentFixture<NonMajorExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonMajorExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMajorExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
