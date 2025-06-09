import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../Components/footer/footer.component";
import { NavAuthComponent } from "../../Components/nav-auth/nav-auth.component";

@Component({
  selector: 'app-auth-employer-layout',
  imports: [RouterOutlet,  FooterComponent, NavAuthComponent],
  templateUrl: './auth-employer-layout.component.html',
  styleUrl: './auth-employer-layout.component.css'
})
export class AuthEmployerLayoutComponent {

}
