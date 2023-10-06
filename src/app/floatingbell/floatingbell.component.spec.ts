import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingbellComponent } from './floatingbell.component';

describe('FloatingbellComponent', () => {
  let component: FloatingbellComponent;
  let fixture: ComponentFixture<FloatingbellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingbellComponent]
    });
    fixture = TestBed.createComponent(FloatingbellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
