import { Component, HostListener, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';

@Component({
  selector: 'app-nav-job-seeker',
  imports: [RouterLink],
  templateUrl: './nav-job-seeker.component.html',
  styleUrl: './nav-job-seeker.component.css',
  standalone: true
})
export class NavJobSeekerComponent {

  signout(): void {
  localStorage.removeItem('token');
  localStorage.removeItem('details');
}
private navbarService = inject(NavbarStateService);
  isScrolled = signal(true);

  constructor() {
    effect(() => {
      this.isScrolled.set(this.navbarService.isScrolled());
    });
  }

}

