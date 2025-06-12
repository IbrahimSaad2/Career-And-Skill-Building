import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Core/Services/auth.service';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly _AuthService = inject(AuthService)
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _Router = inject(Router)
   private navbarService = inject(NavbarStateService);
     private readonly _ToastrService = inject(ToastrService)


  ngOnInit() {
    this.navbarService.setScrolled(true); // solid background
  }

  messageError:string = "";


  loginForm:FormGroup  = this._FormBuilder.group( {
    email:[null, [Validators.required,Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]],
  } );




loginSubmit(): void {
  console.log("hello"); // Debug log

  if (this.loginForm.valid) {
    console.log(this.loginForm); // Log the form object

    this._AuthService.postlogin(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('details', JSON.stringify(res));
          this._Router.navigate(['../jobseeker/home']);
          console.log(res)
          this._ToastrService.success("Welcome Back")
        
      },
      error: (err) => {
        console.log(err);
        this.messageError = err.error.errorMessage;
        this._ToastrService.error("Login Faild")
      }
    });

  } else {
    this.loginForm.setErrors({ mismatch: true });
    this.loginForm.markAllAsTouched();
  }
}


}
