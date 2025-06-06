import { Component, effect, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';

@Component({
  selector: 'app-nav-auth',
  imports: [RouterLink],
  templateUrl: './nav-auth.component.html',
  styleUrl: './nav-auth.component.css'
})
export class NavAuthComponent {
private navbarService = inject(NavbarStateService);
  isScrolled = signal(true);

  constructor() {
    effect(() => {
      this.isScrolled.set(this.navbarService.isScrolled());
    });
  }

}
