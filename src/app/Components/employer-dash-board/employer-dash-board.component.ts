import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ICompany } from '../../Core/interfaces/ICompany';

@Component({
  selector: 'app-employer-dash-board',
  imports: [CommonModule, RouterModule],
  templateUrl: './employer-dash-board.component.html',
  styleUrl: './employer-dash-board.component.css'
})
export class EmployerDashBoardComponent {

  company: ICompany | null = null;
  
  ngOnInit(): void {
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
