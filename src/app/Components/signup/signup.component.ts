import { AuthService } from './../../Core/Services/auth.service';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,RouterLink],

  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  private readonly _AuthService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder)

  SignupForm:FormGroup = this._FormBuilder.group({
    FirstName:[null , [Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    LastName : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    Email : new FormControl(null , [Validators.email,Validators.required]),
    BirthDate : new FormControl(null , [Validators.required]),
    PhoneNumber : new FormControl(null , [Validators.required]),
    Password : new FormControl(null , [Validators.required]),
    ConfirmPassword : new FormControl(null),
  },{validators:this.confrimPasswrd}); 


  submit():void{
    if(this.SignupForm.valid)
      {
      console.log(this.SignupForm.value);
      // this._AuthService.postsignup(this.SignupForm.value).subscribe({
      //   next:(res)=>{
      //     console.log(res);
      //   },
      //   error:(err)=>{
      //     console.log(err);
      //   }
      // })
    }
  }

confrimPasswrd(g:AbstractControl){
  if(g.get('Password')?.value === g.get('ConfirmPassword')?.value){
    return null
  }
  else{
    return {mismatch:true}
  }
}
}
