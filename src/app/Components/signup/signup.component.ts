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
    firstName:[null , [Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    lastName : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email : new FormControl(null , [Validators.email,Validators.required]),
    educationLevel : new FormControl(null , [Validators.required]),
    phoneNumber : new FormControl(null , [Validators.required]),
    password : new FormControl(null , [Validators.required,  Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)
]),
  }); 

  saveFormToLocalStorage(): void {
    console.log('hello')
  if (this.SignupForm.valid) {
    const formData = this.SignupForm.value;
    localStorage.setItem('signupFormData', JSON.stringify(formData));
    console.log('Form data saved to localStorage');
  } else {
    console.log('Form is invalid, cannot save');
  }
}


  
  




//   {
//   "userName": "string",
//   "address": {
//     "street": "string",
//     "city": "string",
//     "country": "string"
//   },
//   "pictureUrl": "string",
//   "email": "user@example.com",
//   "password": "string",
//   "phoneNumber": "string",
//   "firstName": "string",
//   "lastName": "string",
//   "preferredJobTitle": "string",
//   "resumeUrl": "string",
//   "userGoal": "string",
//   "educationLevel": 1
// }
}
