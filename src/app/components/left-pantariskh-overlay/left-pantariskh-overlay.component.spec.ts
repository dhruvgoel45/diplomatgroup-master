import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPantariskhOverlayComponent } from './left-pantariskh-overlay.component';

describe('LeftPantariskhOverlayComponent', () => {
  let component: LeftPantariskhOverlayComponent;
  let fixture: ComponentFixture<LeftPantariskhOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftPantariskhOverlayComponent]
    });
    fixture = TestBed.createComponent(LeftPantariskhOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
