import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { IPosts } from '../../Core/interfaces/IPosts';
import { JobsService } from '../../Core/Services/jobs.service';
import { Subscription } from 'rxjs';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CarouselModule,RouterLink,SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
    allPosts!: Subscription;

    posts: IPosts[] = [];
  
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
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    }
}
