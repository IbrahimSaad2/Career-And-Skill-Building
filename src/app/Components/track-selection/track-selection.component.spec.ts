import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSelectionComponent } from './track-selection.component';

describe('TrackSelectionComponent', () => {
  let component: TrackSelectionComponent;
  let fixture: ComponentFixture<TrackSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
