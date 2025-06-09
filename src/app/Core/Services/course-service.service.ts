import { inject, Inject, Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviornment } from './environments/environment';


export interface Course {
  Name: string;
  Duration?: string;
  Skills?: string[];
  URL?: string;
}
@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private readonly _HttpClient = inject(HttpClient);


  getCourses(query:string): Observable<any> {
    return this._HttpClient.get(`${enviornment.baseCourses}${query}`) ;
  }
}
