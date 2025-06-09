import { Component, inject, OnInit } from '@angular/core';
import { JobsService } from '../../Core/Services/jobs.service';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';
import { Job } from '../../Core/interfaces/job';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-pots',
  imports: [RouterLink],
  templateUrl: './all-pots.component.html',
  styleUrl: './all-pots.component.css'
})
export class AllPotsComponent implements OnInit {
  private readonly _JobsService = inject(JobsService);
  private readonly navbarService = inject(NavbarStateService);
  jobs:Job[] = []

  ngOnInit(): void {
    this.navbarService.setScrolled(true);

    this._JobsService.getAllJobs().subscribe({
      next:(res)=>{
        console.log(res);
        this.jobs = res
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  deleteJob(id:number):void{
    this._JobsService.DeleteJobs(id).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err)
      }
    })
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
