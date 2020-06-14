import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFreeComponent } from './menu-free.component';

describe('MenuFreeComponent', () => {
  let component: MenuFreeComponent;
  let fixture: ComponentFixture<MenuFreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
