import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTeeTimeComponent } from './default-tee-time.component';

describe('DefaultTeeTimeComponent', () => {
  let component: DefaultTeeTimeComponent;
  let fixture: ComponentFixture<DefaultTeeTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultTeeTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultTeeTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
