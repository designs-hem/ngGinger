import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuItemsContainerComponent } from './main-menu-items-container.component';

describe('MainMenuItemsContainerComponent', () => {
  let component: MainMenuItemsContainerComponent;
  let fixture: ComponentFixture<MainMenuItemsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuItemsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuItemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
