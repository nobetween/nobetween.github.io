import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproachShotComponent } from './approach-shot.component';

describe('ApproachShotComponent', () => {
  let component: ApproachShotComponent;
  let fixture: ComponentFixture<ApproachShotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproachShotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproachShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
