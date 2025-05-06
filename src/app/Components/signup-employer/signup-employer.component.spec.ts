import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEmployerComponent } from './signup-employer.component';

describe('SignupEmployerComponent', () => {
  let component: SignupEmployerComponent;
  let fixture: ComponentFixture<SignupEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupEmployerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
