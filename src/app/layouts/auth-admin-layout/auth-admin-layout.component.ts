import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../Components/footer/footer.component";
import { NavAuthComponent } from "../../Components/nav-auth/nav-auth.component";
@Component({
  selector: 'app-auth-admin-layout',
  imports: [RouterOutlet],
  templateUrl: './auth-admin-layout.component.html',
  styleUrl: './auth-admin-layout.component.css'
})
export class AuthAdminLayoutComponent {

}
