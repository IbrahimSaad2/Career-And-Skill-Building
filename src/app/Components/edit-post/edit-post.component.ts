import { Job } from './../../Core/interfaces/job';
import { Component, inject, OnInit } from '@angular/core';
import { JobsService } from '../../Core/Services/jobs.service';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-post',
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent implements OnInit {
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _JobsService = inject(JobsService)
  private readonly navbarService = inject(NavbarStateService)  
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  

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


     job!:Job

     get skills() {
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
  if (this.skills.length > 0) {
    this.skills.removeAt(this.skills.length - 1);
  }
}



ngOnInit(): void {
  this.navbarService.setScrolled(true);
  this._ActivatedRoute.paramMap.subscribe({
    next: (p) => {
      let Id = p.get('id');
      this._JobsService.getSpecificJob(Id).subscribe({
        next: (res) => {
          this.job = res;
          console.log(this.job)

          // Patch the form values here
          this.postJobForm.patchValue({
            name: this.job.name,
            description: this.job.description,
            location: {
              street: this.job.location.street,
              city: this.job.location.city,
              country: this.job.location.country,
            },
            employmentType: this.job.employmentType,
            minSalary: this.job.minSalary,
            maxSalary: this.job.maxSalary,
            // For skills array, you need special handling below
          });

          // For skills (FormArray), reset and set controls properly:
          const skillsArray = this.postJobForm.get('skills');
          if (skillsArray && this.job.skills) {
            // Clear existing
            while ((skillsArray as any).length !== 0) {
              (skillsArray as any).removeAt(0);
            }

            // Add skills from job
            this.job.skills.forEach(skill => {
              (skillsArray as any).push(this._FormBuilder.group({
                name: [skill.name, Validators.required],
                description: [skill.description],
                category: [skill.category]
              }));
            });
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    },
  });
}

submit():void{
  if(this.postJobForm.valid){
    this._ActivatedRoute.paramMap.subscribe({
      next: (P) => {
      let Id = P.get('id')
      this._JobsService.editPost(Id!,this.postJobForm).subscribe({
        next:(res)=>{
          console.log(res);
        },
        error:(err)=>{
          console.log(err);
        }
      })
      }
    })
}
}
  
}
