import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInBodyComponent } from './log-in-body.component';

describe('LogInBodyComponent', () => {
  let component: LogInBodyComponent;
  let fixture: ComponentFixture<LogInBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
