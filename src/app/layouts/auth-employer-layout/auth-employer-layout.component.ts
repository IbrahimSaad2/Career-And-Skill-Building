import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavAuthEmployerComponent } from "../../Components/nav-auth-employer/nav-auth-employer.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { NavAuthComponent } from "../../Components/nav-auth/nav-auth.component";

@Component({
  selector: 'app-auth-employer-layout',
  imports: [RouterOutlet, NavAuthEmployerComponent, FooterComponent, NavAuthComponent],
  templateUrl: './auth-employer-layout.component.html',
  styleUrl: './auth-employer-layout.component.css'
})
export class AuthEmployerLayoutComponent {

}
