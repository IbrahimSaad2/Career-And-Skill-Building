import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPotsComponent } from './all-pots.component';

describe('AllPotsComponent', () => {
  let component: AllPotsComponent;
  let fixture: ComponentFixture<AllPotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
