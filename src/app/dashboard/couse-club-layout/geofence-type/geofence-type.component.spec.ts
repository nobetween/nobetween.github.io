import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeofenceTypeComponent } from './geofence-type.component';

describe('GeofenceTypeComponent', () => {
  let component: GeofenceTypeComponent;
  let fixture: ComponentFixture<GeofenceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeofenceTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeofenceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
