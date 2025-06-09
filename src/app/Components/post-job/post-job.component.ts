import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { JobsService } from '../../Core/Services/jobs.service';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';
@Component({
  selector: 'app-post-job',
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css'
})
export class PostJobComponent {
    private readonly _FormBuilder = inject(FormBuilder)
    private readonly _JobsService = inject(JobsService)
    private readonly navbarService = inject(NavbarStateService)
  
    postJobForm: FormGroup = this._FormBuilder.group({
    name: [null, Validators.required],
    description: [null, Validators.required],
    location: this._FormBuilder.group({
      street: [null, Validators.required],  
      city: [null, Validators.required],
      country: [null, Validators.required]
    }),
    employmentType: [0, Validators.required],
    minSalary: [null, Validators.required],
    maxSalary: [null, Validators.required],
    skills: this._FormBuilder.array([
      this._FormBuilder.group({
        name: [null, Validators.required],
        description: [null],
        category: [0]
      })
    ])
  });

   get skills(): FormArray {
    return this.postJobForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this._FormBuilder.group({
      name: [null, Validators.required],
      description: [null],
      category: [0]
    }));
  }

removeSkill() {
  const lastIndex = this.skills.length - 1;
  if (lastIndex >= 0) {
    this.skills.removeAt(lastIndex);
  }
}
    ngOnInit(): void {
        this.navbarService.setScrolled(true);
    }


  submitJob() {
    if (this.postJobForm.valid) {
      console.log(this.postJobForm);
      this._JobsService.postJobs(this.postJobForm.value).subscribe({
        next:(res)=>{
          console.log(res)
        },
        error:(err)=>{
          console.log(err)
        }
      })
    } 
  }
}
