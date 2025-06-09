import { Component, inject, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseServiceService, Course  } from '../../Core/Services/course-service.service';
@Component({
  selector: 'app-course-details',
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent   {
  selectedCourse: any = null;

toggleDetails(course: any) {
  this.selectedCourse = this.selectedCourse === course ? null : course;
}
 courses: Course[] = [];
  isLoading: boolean = true;           
  errorOccurred: boolean = false;     

  private courseService = inject(CourseServiceService);

  // ngOnInit(): void {
  //   this.courseService.getCourses().subscribe({
  //     next: (data: { Courses: Course[] }) => {
  //       this.courses = data.Courses;
  //       console.log('Courses:', this.courses);
  //       this.isLoading = false;
  //     },
  //     error: (err) => {
  //       console.error('Error loading courses:', err);
  //       this.isLoading = false;
  //       this.errorOccurred = true;
  //     }
  //   });
  // }

  openDialog(course: Course) {
    this.selectedCourse = course;
  }

  closeDialog() {
    this.selectedCourse = null;
  }

  reload() {
    window.location.reload(); 
  }
}
