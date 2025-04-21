import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  @ViewChild('carouselContainer', { static: false })
  carouselContainer!: ElementRef;
  currentIndex = 0;
  intervalId: any;

  featuredCourses = [
    {
      title: 'Intro to Angular',
      duration: '3 hrs',
      level: 'Intermediate',
      certificate: true,
      rating: 4.5,
      students: 1245,
    },
    {
      title: 'Web Basics',
      duration: '1.5 hrs',
      level: 'Beginner',
      certificate: false,
      rating: 4.1,
      students: 850,
    },
    {
      title: 'S.O.L.I.D Principles',
      duration: '2 hrs',
      level: 'Advanced',
      certificate: true,
      rating: 4.8,
      students: 900,
    },
    {
      title: 'API Integration',
      duration: '2.5 hrs',
      level: 'Intermediate',
      certificate: true,
      rating: 4.6,
      students: 1100,
    },
    {
      title: 'Advanced Frontend',
      duration: '4 hrs',
      level: 'Advanced',
      certificate: true,
      rating: 4.9,
      students: 1800,
    },
    {
      title: 'Database Design',
      duration: '2 hrs',
      level: 'Intermediate',
      certificate: true,
      rating: 4.3,
      students: 730,
    },
  ];

  ngOnInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 >= 0.5;
  }

  getEmptyStars(rating: number): number[] {
    const full = Math.floor(rating);
    const half = this.hasHalfStar(rating) ? 1 : 0;
    return Array(5 - full - half).fill(0);
  }

  scrollLeft(): void {
    this.carouselContainer.nativeElement.scrollLeft -= 300;
    this.updateIndex(-1);
  }

  scrollRight(): void {
    this.carouselContainer.nativeElement.scrollLeft += 300;
    this.updateIndex(1);
  }

  scrollToIndex(index: number): void {
    const scrollAmount = index * 300;
    this.carouselContainer.nativeElement.scrollLeft = scrollAmount;
    this.currentIndex = index;
  }

  updateIndex(direction: number): void {
    const newIndex = this.currentIndex + direction;
    if (newIndex >= 0 && newIndex < this.featuredCourses.length) {
      this.currentIndex = newIndex;
    } else if (newIndex >= this.featuredCourses.length) {
      this.currentIndex = 0;
      this.carouselContainer.nativeElement.scrollLeft = 0;
    } else {
      this.currentIndex = this.featuredCourses.length - 1;
    }
  }

  startAutoScroll(): void {
    this.intervalId = setInterval(() => {
      this.scrollRight();
    }, 4000);
  }

  onScroll(): void {
    const container = this.carouselContainer.nativeElement;
    const scrollLeft = container.scrollLeft;
    this.currentIndex = Math.round(scrollLeft / 300);
  }

  recommendedCourses = [
    { title: 'Lorem ipsum odor amet' },
    { title: 'Lorem ipsum odor amet' },
    { title: 'Lorem ipsum odor amet' },
    { title: 'Lorem ipsum odor amet' },
  ];
}
