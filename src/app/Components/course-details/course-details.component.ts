import { Component, inject, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceService,  } from '../../Core/Services/course-service.service';
import { NavbarStateService } from '../../Core/Services/navbar-state-service.service';
import { LearningTrack } from '../../Core/interfaces/course';
import { json } from 'stream/consumers';
@Component({
  selector: 'app-course-details',
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit   {
    private readonly _ActivatedRoute = inject(ActivatedRoute);
    private readonly navbarService = inject(NavbarStateService);
    private _courseService = inject(CourseServiceService);

 track!:LearningTrack; 

  ngOnInit(): void {
    this.navbarService.setScrolled(true);
    this._ActivatedRoute.paramMap.subscribe({
      next:(P)=>{
        console.log(P.get('track'))
        let query = P.get('track');
        this._courseService.getCourses(query!).subscribe({
          next:(res)=>{
            console.log(res);
            this.track = res
            console.log(this.track)
          },
          error:(err)=> {
            console.log(err)
          },
        })
      }
    })
  }
}
