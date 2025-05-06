import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAuthEmployerComponent } from './nav-auth-employer.component';

describe('NavAuthEmployerComponent', () => {
  let component: NavAuthEmployerComponent;
  let fixture: ComponentFixture<NavAuthEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavAuthEmployerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAuthEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
