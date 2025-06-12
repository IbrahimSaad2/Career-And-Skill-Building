import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { JobsService } from './../../Core/Services/jobs.service';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';
import { IPosts } from '../../Core/interfaces/IPosts';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private readonly jobsService = inject(JobsService);
  private readonly navbarService = inject(NavbarStateService);

  posts: IPosts[] = [];
  filteredPost: IPosts[] = [];
  searchQuery: string = '';
  private subscription!: Subscription;

  ngOnInit(): void {
    this.navbarService.setScrolled(true);
    this.subscription = this.jobsService.getJobs('').subscribe({
      next: (res) => {
        this.posts = this.posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  filteredPosts(): void {
    const query = this.searchQuery.trim();
    if (query === '') {
      this.filteredPost = [];
      return;
    }

    this.jobsService.getJobs(query).subscribe({
      next: (res) => {
        this.filteredPost = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getTimeAgo(date: Date): string {
    const createdDate = new Date(date);
    const now = new Date();
    const diffMs = now.getTime() - createdDate.getTime();

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays >= 1) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHours >= 1) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;

    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    if (diffMinutes >= 1) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;

    return 'Just now';
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
