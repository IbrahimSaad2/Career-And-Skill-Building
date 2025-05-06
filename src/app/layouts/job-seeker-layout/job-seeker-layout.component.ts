import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../Components/footer/footer.component";
import { NavJobSeekerComponent } from "../../Components/nav-job-seeker/nav-job-seeker.component";

@Component({
  selector: 'app-blank-layout',
  imports: [NavJobSeekerComponent, RouterOutlet, FooterComponent, NavJobSeekerComponent],
  templateUrl: './job-seeker-layout.component.html',
  styleUrl: './job-seeker-layout.component.css'
})
export class JobSeekerLayout {

}
