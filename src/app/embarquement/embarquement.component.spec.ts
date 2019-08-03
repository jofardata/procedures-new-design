import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbarquementComponent } from './embarquement.component';

describe('EmbarquementComponent', () => {
  let component: EmbarquementComponent;
  let fixture: ComponentFixture<EmbarquementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbarquementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbarquementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
