import { Component, HostListener, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPosts } from '../../Core/interfaces/IPosts';
import { JobsService } from '../../Core/Services/jobs.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';

@Component({
  selector: 'app-landing-page',
  imports: [CarouselModule,RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  private navbarService = inject(NavbarStateService);
  @HostListener('window:scroll', [])
  onScroll() {
    const headerHeight = document.querySelector('.header')?.clientHeight || 0;
    const isBeyondHeader = window.scrollY > headerHeight;
    this.navbarService.setScrolled(isBeyondHeader);
  }

  customOptions: OwlOptions  = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:3000,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    items:1,
  }
  
    ngOnInit(): void {
        this.navbarService.setScrolled(false); // transparent on load
    }
  
}
