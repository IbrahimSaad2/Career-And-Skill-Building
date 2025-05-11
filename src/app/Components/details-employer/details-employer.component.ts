import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details-employer',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './details-employer.component.html',
  styleUrl: './details-employer.component.css'
})
export class DetailsEmployerComponent {
  editProfileForm: FormGroup;
  currentProfile = {
    companyName: 'ITSYS',
    email: 'mohamed@gmail.com',
    location: 'Cairo, Egypt',
    description: 'We provide innovative software solutions.',
    phone: '+20 1128094997',
    website: 'https://g.co/kgs/yzvG1yH',
  };
  constructor(private fb: FormBuilder) {
    this.editProfileForm = this.fb.group({
      companyName: [this.currentProfile.companyName, Validators.required],
    email: [this.currentProfile.email, [Validators.required, Validators.email]],
    location: [this.currentProfile.location, Validators.required],
    description: [this.currentProfile.description],
    phone: [this.currentProfile.phone],
    website: [this.currentProfile.website],
    });
  }

  saveChanges() {
    if (this.editProfileForm.valid) {
      const profileData = this.editProfileForm.value;
      console.log(' Profile Data:', profileData);
    }
  }
  stats = {
    jobsPosted: 10,
    applications: 130,
  };
  
  
  confirmDelete() {
    if (confirm('Are you sure you want to delete your account?')) {
      console.log('Deleting account...');
    }
  }
}
