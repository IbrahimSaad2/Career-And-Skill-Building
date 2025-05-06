import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmployerLayoutComponent } from './auth-employer-layout.component';

describe('AuthEmployerLayoutComponent', () => {
  let component: AuthEmployerLayoutComponent;
  let fixture: ComponentFixture<AuthEmployerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthEmployerLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthEmployerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
