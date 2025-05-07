import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { AuthService } from '../../Core/Services/auth.service';

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
  
  
    messageError:string = "";
  
  
    loginForm:FormGroup  = this._FormBuilder.group( {
      email:[null, [Validators.required,Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^[\w!@#$%^&*]{6,}$/)]],
    } );
  
  
  
  
  loginSubmit():void{
    if(this.loginForm.valid){
      console.log(this.loginForm)
      // this._AuthService.postlogin(this.loginForm.value).subscribe({
      //   next:(res)=>{
      //     console.log(res)
      //     if(res.message == "success"){
      //       localStorage.setItem('UserToken',res.token);
      //       this._AuthService.decodeToken();
      //       this._Router.navigate(['../jobseeker/home']);
      //     }
      //   },
      //   error:(err)=>{
      //     console.log(err)
      //     this.messageError = err.error.message
      //   }
      // })
    }
  
    else{
      // this.loginForm.setErrors({mismatch:true})
      // this.loginForm.markAllAsTouched()
    }
  }
}
