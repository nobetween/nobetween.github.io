import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinLocationComponent } from './pin-location.component';

describe('PinLocationComponent', () => {
  let component: PinLocationComponent;
  let fixture: ComponentFixture<PinLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
