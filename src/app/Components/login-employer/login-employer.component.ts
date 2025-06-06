import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { AuthService } from '../../Core/Services/auth.service';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';

@Component({
  selector: 'app-login-employer',
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './login-employer.component.html',
  styleUrl: './login-employer.component.css'
})
export class LoginEmployerComponent {

    private readonly _AuthService = inject(AuthService)
    private readonly _FormBuilder = inject(FormBuilder)
    private readonly _Router = inject(Router)
       private navbarService = inject(NavbarStateService);

  ngOnInit() {
    this.navbarService.setScrolled(true); // solid background
  }
  
  
    messageError:string = "";
  
  
    loginForm:FormGroup  = this._FormBuilder.group( {
      email:[null, [Validators.required,Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^[\w!@#$%^&*]{6,}$/)]],
    } );
  
  
  
  
  loginSubmit():void{
    if(this.loginForm.valid){
      console.log(this.loginForm)
      this._AuthService.postloginCompany(this.loginForm.value).subscribe({
        next:(res)=>{
          console.log(res)
            localStorage.setItem('token',res.token);
            localStorage.setItem('details', JSON.stringify(res));
            this._Router.navigate(['../../employer/home']);
        },
        error:(err)=>{
          console.log(err)
          this.messageError = err.error.errorMessage;
        }
      })
    }
  
    else{
      this.loginForm.setErrors({mismatch:true})
      this.loginForm.markAllAsTouched()
    }
  }
}
