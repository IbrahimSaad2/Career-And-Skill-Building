import { TestBed } from '@angular/core/testing';

import { NavbarStateServiceService } from './navbar-state-service.service';

describe('NavbarStateServiceService', () => {
  let service: NavbarStateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarStateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
