import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPlaygroundComponent } from './css-playground.component';

describe('CssPlaygroundComponent', () => {
  let component: CssPlaygroundComponent;
  let fixture: ComponentFixture<CssPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
