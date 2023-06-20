import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftOverlayComponent } from './left-overlay.component';

describe('LeftOverlayComponent', () => {
  let component: LeftOverlayComponent;
  let fixture: ComponentFixture<LeftOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftOverlayComponent]
    });
    fixture = TestBed.createComponent(LeftOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
