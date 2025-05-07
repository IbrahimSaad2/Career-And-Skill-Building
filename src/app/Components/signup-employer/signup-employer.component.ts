import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../Core/Services/auth.service';

@Component({
  selector: 'app-signup-employer',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signup-employer.component.html',
  styleUrl: './signup-employer.component.css',
})
export class SignupEmployerComponent {
  private readonly _AuthService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);

  SignupForm: FormGroup = this._FormBuilder.group(
    {
      CompanyName: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      CompanyEmail: new FormControl(null, [
        Validators.email,
        Validators.required,
      ]),
      PhoneNumber: new FormControl(null, [Validators.required]),
      Password: new FormControl(null, [Validators.required,Validators.pattern(/^[\w!@#$%^&*]{6,}$/)]),
      ConfirmPassword: new FormControl(null),
    },
    { validators: this.confrimPasswrd }
  );

  submit(): void {
    if (this.SignupForm.valid) {
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

  confrimPasswrd(g: AbstractControl) {
    if (g.get('Password')?.value === g.get('ConfirmPassword')?.value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }
}
