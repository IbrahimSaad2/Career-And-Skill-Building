import { Component, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';

@Component({
  selector: 'app-nav-blank-employer',
  imports: [RouterLink],
  templateUrl: './nav-blank-employer.component.html',
  styleUrl: './nav-blank-employer.component.css'
})
export class NavBlankEmployerComponent {
  signout():void{
    localStorage.removeItem('token');
    localStorage.removeItem('details')
  }

  private navbarService = inject(NavbarStateService);
    isScrolled = signal(true);
  
    constructor() {
      effect(() => {
        this.isScrolled.set(this.navbarService.isScrolled());
      });
    }
}
