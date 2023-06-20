import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantarikshComponent } from './pantariksh.component';

describe('PantarikshComponent', () => {
  let component: PantarikshComponent;
  let fixture: ComponentFixture<PantarikshComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PantarikshComponent]
    });
    fixture = TestBed.createComponent(PantarikshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
