import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-post-job',
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css'
})
export class PostJobComponent {
  postJobForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.postJobForm = this.fb.group({
      jobTitle: ['', Validators.required],
      jobDescription: ['', Validators.required],
      location: ['', Validators.required],
      salary: [''],
      jobType: ['']  
    });
  }

  submitJob() {
    if (this.postJobForm.valid) {
      const jobData = this.postJobForm.value;
      console.log(' Job Data:', jobData);
    } 
  }
}
