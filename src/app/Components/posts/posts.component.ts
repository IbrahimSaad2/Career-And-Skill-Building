import { JobsService } from './../../Core/Services/jobs.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { IPosts } from '../../Core/interfaces/IPosts';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';
import { FormsModule } from '@angular/forms';
import { query } from 'express';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-posts',
  imports: [RouterLink,FormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  private readonly _jobs = inject(JobsService);
  private readonly navbarService = inject(NavbarStateService);
  allPosts!: Subscription;
  posts: IPosts[] = [];

  ngOnInit(): void {
    this.navbarService.setScrolled(true);
      this.allPosts = this._jobs.getJobs('').subscribe({
      next: (res) => {
        console.log(res);
        this.posts = res
        this.posts = this.posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
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
  if (diffHours >= 1) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  }

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  if (diffMinutes >= 1) {
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
  }

  return 'Just now';
}
searchQuery:string = '';
filteredPost:IPosts[] = [];

  filteredPosts():void {
    const query = this.searchQuery.trim();
    this._jobs.getJobs(query).subscribe({
      next:(res)=>{
        console.log(query);
        console.log(res);
        this.filteredPost = res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}