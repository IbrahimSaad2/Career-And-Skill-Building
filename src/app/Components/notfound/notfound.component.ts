import { Component } from '@angular/core';
import { NavBlankComponent } from "../nav-blank/nav-blank.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-notfound',
  imports: [NavBlankComponent, FooterComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {

}
