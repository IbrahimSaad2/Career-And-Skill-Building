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
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';

@Component({
  selector: 'app-signup-employer',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './signup-employer.component.html',
  styleUrl: './signup-employer.component.css',
})
export class SignupEmployerComponent {
  private readonly _AuthService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  private navbarService = inject(NavbarStateService);
  
    ngOnInit() {
      this.navbarService.setScrolled(true); // solid background
    }

SignupForm: FormGroup = this._FormBuilder.group(
  {
    userName: [null, [Validators.required,     Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
    Validators.pattern(/^\S+$/)]],
    
    address: this._FormBuilder.group({
      street: [null, Validators.required],
      city: [null, Validators.required],
      country: [null, Validators.required],
    }),

    pictureUrl: [null, [Validators.required,Validators.pattern(/.*\.(png|jpg|jpeg|gif|svg|webp)$/i)]],

    email: [null, [Validators.email, Validators.required]],

    password: [null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]],


    phoneNumber: [null, [Validators.required, Validators.pattern(/^\d+$/)]],

    companyName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],

    size: [null, Validators.required],

    industry: [null, Validators.required],

    websiteUrl: [null, [Validators.required, Validators.pattern(/^(https?:\/\/)?([\w\d\-]+\.)+\w{2,}(\/.*)?$/)]],
  },
);

messageError:string = "";
  submit(): void {
    console.log('hello')
    if (this.SignupForm.valid) {
      console.log(this.SignupForm.value);
      this._AuthService.postignupCompany(this.SignupForm.value).subscribe({
        next:(res)=>{
          console.log(res);
        },
        error:(err)=>{
          console.log(err);
          this.messageError = err.error.errorMessage;
        }
      })
    }
  }

}
