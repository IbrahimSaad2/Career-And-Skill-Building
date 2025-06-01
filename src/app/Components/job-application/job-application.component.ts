import { Skill } from '../../Core/interfaces/IPosts';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { JobsService } from '../../Core/Services/jobs.service';
import { IPosts } from '../../Core/interfaces/IPosts';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-job-application',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.css',
})
export class JobApplicationComponent implements OnInit {
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _JobsService = inject(JobsService);

  posts: IPosts | null = null;

  get skillCategories(): string {
    if (!this.posts?.skills || this.posts.skills.length === 0) {
      return '';
    }
    return this.posts.skills.map((skill) => skill.category).join(' , ');
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        console.log(p.get('id'));
        let Id = p.get('id');
        this._JobsService.getSpecificJob(Id).subscribe({
          next: (res) => {
            console.log(res);
            this.posts = res;
            console.log(this.posts);
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });
  }
}
