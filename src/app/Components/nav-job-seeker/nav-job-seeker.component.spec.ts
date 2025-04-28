import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavJobSeekerComponent } from './nav-job-seeker.component';

describe('NavJobSeekerComponent', () => {
  let component: NavJobSeekerComponent;
  let fixture: ComponentFixture<NavJobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavJobSeekerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
