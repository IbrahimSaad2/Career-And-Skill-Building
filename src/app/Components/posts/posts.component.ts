import { JobsService } from './../../Core/Services/jobs.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { IPosts } from '../../Core/interfaces/IPosts';
@Component({
  selector: 'app-posts',
  imports: [RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
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
