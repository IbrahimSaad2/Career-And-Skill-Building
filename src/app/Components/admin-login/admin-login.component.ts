import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { AuthService } from '../../Core/Services/auth.service';
@Component({
  selector: 'app-admin-login',
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

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
    }
  
    else{
      
    }
  }
}
