import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';
import { AuthService } from '../../Core/Services/auth.service';

@Component({
  selector: 'app-nav-job-seeker',
  imports: [RouterLink],
  templateUrl: './nav-job-seeker.component.html',
  styleUrl: './nav-job-seeker.component.css'
})
export class NavJobSeekerComponent {
  signout():void{
    localStorage.removeItem('token');
    localStorage.removeItem('details')
  }
}

