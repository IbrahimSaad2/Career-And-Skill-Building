import { Component, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ICompany } from '../../Core/interfaces/ICompany';
import { log } from 'console';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';

@Component({
  selector: 'app-home-employer',
  imports: [RouterLink],
  templateUrl: './home-employer.component.html',
  styleUrl: './home-employer.component.css'
})
export class HomeEmployerComponent {
  company: ICompany | null = null;
  
    private navbarService = inject(NavbarStateService);
    @HostListener('window:scroll', [])
    onScroll() {
      const headerHeight = document.querySelector('.header')?.clientHeight || 0;
      const isBeyondHeader = window.scrollY > headerHeight;
      this.navbarService.setScrolled(isBeyondHeader);
    }


  ngOnInit(): void {
    const storedUser = localStorage.getItem('details');
    if (storedUser) {
      this.company = JSON.parse(storedUser);
      console.log(this.company);
      console.log('hello');
      
    }
    else{
      console.log("helle")
    }
    this.navbarService.setScrolled(false); // transparent on load

  }

}
