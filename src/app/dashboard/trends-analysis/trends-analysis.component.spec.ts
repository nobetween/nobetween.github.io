import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsAnalysisComponent } from './trends-analysis.component';

describe('TrendsAnalysisComponent', () => {
  let component: TrendsAnalysisComponent;
  let fixture: ComponentFixture<TrendsAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendsAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
