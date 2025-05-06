import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerDashBoardComponent } from './employer-dash-board.component';

describe('EmployerDashBoardComponent', () => {
  let component: EmployerDashBoardComponent;
  let fixture: ComponentFixture<EmployerDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerDashBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
