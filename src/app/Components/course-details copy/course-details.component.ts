import { Course } from './../../Core/interfaces/course';
import { Component, OnInit, inject } from '@angular/core';
import { CourseServiceService } from '../../Core/Services/course-service.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courses: Course[] = [];
  isLoading = true;
  errorOccurred = false;
  selectedCourse: Course | null = null;
  searchQuery = '';

  private courseService = inject(CourseServiceService);
  private router = inject(Router);

  ngOnInit(): void {
    this.fetchCourses('frontend');
  }

  fetchCourses(query: string) {
    this.isLoading = true;
    this.errorOccurred = false;
    this.courseService.getCourses(query).subscribe({
      next: (data: { Courses: Course[] }) => {
        this.courses = data.Courses;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading courses:', err);
        this.errorOccurred = true;
        this.isLoading = false;
      }
    });
  }

  search() {
    const query = this.searchQuery.trim();
    if (query) this.fetchCourses(query);
  }

  trackByName(index: number, course: Course): string {
    return course.Name;
  }

  openDialog(course: Course) {
    this.selectedCourse = course;
  }

  closeDialog() {
    this.selectedCourse = null;
  }

  reload() {
    window.location.reload();
  }

  goToExam(course: Course) {
    if (!course.Skills || course.Skills.length === 0) {
      alert("This course does not contain exam preparation skills.");
      return;
    }

    this.router.navigate(['/jobseeker/exam'], {
      state: { skills: course.Skills }
    });

    
  }
}
