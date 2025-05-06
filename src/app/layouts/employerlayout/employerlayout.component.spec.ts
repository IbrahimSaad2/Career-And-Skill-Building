import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerlayoutComponent } from './employerlayout.component';

describe('EmployerlayoutComponent', () => {
  let component: EmployerlayoutComponent;
  let fixture: ComponentFixture<EmployerlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerlayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
