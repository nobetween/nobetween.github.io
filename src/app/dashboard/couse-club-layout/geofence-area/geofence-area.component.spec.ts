import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeofenceAreaComponent } from './geofence-area.component';

describe('GeofenceAreaComponent', () => {
  let component: GeofenceAreaComponent;
  let fixture: ComponentFixture<GeofenceAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeofenceAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeofenceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
