import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeeLocationComponent } from './tee-location.component';

describe('TeeLocationComponent', () => {
  let component: TeeLocationComponent;
  let fixture: ComponentFixture<TeeLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeeLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
