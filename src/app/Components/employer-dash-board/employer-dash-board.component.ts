import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employer-dash-board',
  imports: [CommonModule, RouterModule],
  templateUrl: './employer-dash-board.component.html',
  styleUrl: './employer-dash-board.component.css'
})
export class EmployerDashBoardComponent {
  jobPosts = [
    { id: 1, title: 'Frontend Developer', postedDate: '2025-05-01' },
    { id: 2, title: 'Backend Developer', postedDate: '2025-04-27' },
    { id: 3, title: 'Project Manager', postedDate: '2025-04-20' }
  ];
}
