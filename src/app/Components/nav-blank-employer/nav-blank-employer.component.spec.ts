import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBlankEmployerComponent } from './nav-blank-employer.component';

describe('NavBlankEmployerComponent', () => {
  let component: NavBlankEmployerComponent;
  let fixture: ComponentFixture<NavBlankEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBlankEmployerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBlankEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
