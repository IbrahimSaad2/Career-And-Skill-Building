import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerLayout } from './job-seeker-layout.component';

describe('BlankLayoutComponent', () => {
  let component: JobSeekerLayout;
  let fixture: ComponentFixture<JobSeekerLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSeekerLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSeekerLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
