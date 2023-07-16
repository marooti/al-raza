import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTextComponent } from './nav-text.component';

describe('NavTextComponent', () => {
  let component: NavTextComponent;
  let fixture: ComponentFixture<NavTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
