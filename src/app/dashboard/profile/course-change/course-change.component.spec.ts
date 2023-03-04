import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseChangeComponent } from './course-change.component';

describe('CourseChangeComponent', () => {
  let component: CourseChangeComponent;
  let fixture: ComponentFixture<CourseChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
