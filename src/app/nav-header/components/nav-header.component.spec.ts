import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GingerHeaderComponent } from './ginger-header.component';

describe('GingerHeaderComponent', () => {
  let component: GingerHeaderComponent;
  let fixture: ComponentFixture<GingerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GingerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GingerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
