import { RouterLink } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../Core/Services/auth.service';

@Component({
  selector: 'app-skills-and-tools',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './skills-and-tools.component.html',
  styleUrl: './skills-and-tools.component.css'
})
export class SkillsAndToolsComponent {
  userForm!: FormGroup;

  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
    private readonly _AuthService = inject(AuthService);
  



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

SignupFormStep2 = this.fb.group({
  userName: [null, [Validators.required]],
  preferredJobTitle: [null, [Validators.required]],
  resumeUrl: [null, [Validators.required]],
  pictureUrl: [null, [Validators.required]],
  userGoal: [null, [Validators.required]],
  address: this.fb.group({
    street: [null, [Validators.required]],
    city: [null, [Validators.required]],
    country: [null, [Validators.required]]
  })
});


onFileSelect(event: any, controlName: 'resumeUrl' | 'pictureUrl'): void {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const base64String = reader.result as string;
    this.SignupFormStep2.patchValue({ [controlName]: base64String });
    this.SignupFormStep2.get(controlName)?.markAsTouched();
  };
  reader.readAsDataURL(file);
}


submit(): void {
      console.log('hello')
      console.log(this.SignupFormStep2.value)
      if (this.SignupFormStep2.valid) {
    const step1Raw = localStorage.getItem('signupFormData');

    if (!step1Raw) {
      console.error('Step 1 data not found in localStorage.');
      return;
    }

    const step1Data = JSON.parse(step1Raw);

    const step2Data = this.SignupFormStep2.value;

    const finalUserObject = {
      ...step1Data,
      ...step2Data,
      educationLevel: +step1Data.educationLevel // ensure it's a number
    };

    console.log('Submitting Final Object:', finalUserObject);

    this._AuthService.postsignup(finalUserObject).subscribe({
      next: res => {
        console.log('Success:', res);
        localStorage.removeItem('signupFormData'); // optional cleanup
      },
      error: err => console.error('Submission Error:', err)
    });
  } else {
    this.SignupFormStep2.markAllAsTouched();
    console.warn('Form is invalid');
  }
      }
}

