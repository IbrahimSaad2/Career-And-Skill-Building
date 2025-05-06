import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEmployerComponent } from './details-employer.component';

describe('DetailsEmployerComponent', () => {
  let component: DetailsEmployerComponent;
  let fixture: ComponentFixture<DetailsEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsEmployerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
