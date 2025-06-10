import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { IPosts } from '../../Core/interfaces/IPosts';
import { JobsService } from '../../Core/Services/jobs.service';
import { Subscription } from 'rxjs';
import { SlicePipe } from '@angular/common';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';
import { Tracks } from '../../Core/interfaces/tracks';
import { TrackService } from '../../Core/Services/track.service';

@Component({
  selector: 'app-home',
  imports: [CarouselModule,RouterLink,SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
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
   private readonly _jobs = inject(JobsService);
   private readonly _TrackService = inject(TrackService);
    allPosts!: Subscription;

    posts: IPosts[] = [];
    tracks:Tracks[] = [];
  
    ngOnInit(): void {
      this.allPosts = this._jobs.getJobs().subscribe({
        next: (res) => {
          console.log(res);
          this.posts = res;
          console.log(this.posts);
        },
        error: (err) => {
          console.log(err);
        },
      });
      this._TrackService.getallTracks().subscribe({
        next:(res)=>{
          console.log(res)
          this.tracks = res
        },
        error:(err)=>{
          console.log(err);
        }
      })
        this.navbarService.setScrolled(false);
    }
getTimeAgo(date: Date): string {
  const createdDate = new Date(date);
  const now = new Date();

  const diffMs = now.getTime() - createdDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays >= 1) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  }

  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffHours >= 1) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  }

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  if (diffMinutes >= 1) {
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
  }

  return 'Just now';
}
}
