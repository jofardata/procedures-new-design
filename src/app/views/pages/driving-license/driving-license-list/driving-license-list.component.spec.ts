import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingLicenseListComponent } from './driving-license-list.component';

describe('DrivingLicenseListComponent', () => {
  let component: DrivingLicenseListComponent;
  let fixture: ComponentFixture<DrivingLicenseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivingLicenseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivingLicenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
