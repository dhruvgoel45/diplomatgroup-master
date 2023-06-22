import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPantariskhOverlayComponent } from './right-pantariskh-overlay.component';

describe('RightPantariskhOverlayComponent', () => {
  let component: RightPantariskhOverlayComponent;
  let fixture: ComponentFixture<RightPantariskhOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightPantariskhOverlayComponent]
    });
    fixture = TestBed.createComponent(RightPantariskhOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
