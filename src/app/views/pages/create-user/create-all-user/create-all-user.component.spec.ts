import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAllUserComponent } from './create-all-user.component';

describe('CreateAllUserComponent', () => {
  let component: CreateAllUserComponent;
  let fixture: ComponentFixture<CreateAllUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAllUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAllUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
