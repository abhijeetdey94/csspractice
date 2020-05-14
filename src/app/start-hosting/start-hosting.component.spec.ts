import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartHostingComponent } from './start-hosting.component';

describe('StartHostingComponent', () => {
  let component: StartHostingComponent;
  let fixture: ComponentFixture<StartHostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartHostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
