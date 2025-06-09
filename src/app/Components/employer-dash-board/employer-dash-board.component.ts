import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ICompany } from '../../Core/interfaces/ICompany';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';
import { JobsService } from '../../Core/Services/jobs.service';
import { Job } from '../../Core/interfaces/job';

@Component({
  selector: 'app-employer-dash-board',
  imports: [CommonModule, RouterModule],
  templateUrl: './employer-dash-board.component.html',
  styleUrl: './employer-dash-board.component.css'
})
export class EmployerDashBoardComponent {
  private readonly navbarService = inject(NavbarStateService)
    private readonly _JobsService = inject(JobsService);
  
  jobs:Job[] = []
  company: ICompany | null = null;
  
  ngOnInit(): void {
    this.navbarService.setScrolled(true);
    this._JobsService.getAllJobs().subscribe({
      next:(res)=>{
        console.log(res)
        this.jobs = res
        console.log(this.jobs.length)
      },
      error:(err)=>{
        console.log(err)
      }
    })
    const storedUser = localStorage.getItem('details');
    if (storedUser) {
      this.company = JSON.parse(storedUser);
      console.log(this.company);
    }
    else{
      console.log("helle")
    }
  }
}
