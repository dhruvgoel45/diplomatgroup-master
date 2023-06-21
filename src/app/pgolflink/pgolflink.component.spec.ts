import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgolflinkComponent } from './pgolflink.component';

describe('PgolflinkComponent', () => {
  let component: PgolflinkComponent;
  let fixture: ComponentFixture<PgolflinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgolflinkComponent]
    });
    fixture = TestBed.createComponent(PgolflinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
