import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../Components/footer/footer.component";
import { NavBlankEmployerComponent } from "../../Components/nav-blank-employer/nav-blank-employer.component";

@Component({
  selector: 'app-employerlayout',
  imports: [RouterOutlet, FooterComponent, NavBlankEmployerComponent],
  templateUrl: './employerlayout.component.html',
  styleUrl: './employerlayout.component.css'
})
export class EmployerlayoutComponent {

}
