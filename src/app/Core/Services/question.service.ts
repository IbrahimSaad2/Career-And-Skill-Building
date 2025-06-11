import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Question {
  questionNumber: number;
  template: string;
  options: string[];
  correct: string;
  difficulty: string;
  skills: string[];
}


@Injectable({ providedIn: 'root' })
export class QuestionService {
 private API = '/api/questions'; 

  constructor(private http: HttpClient) {}

  getQuestions(skills: string[]): Observable<Question[]> {
    const query = skills.map(s => `skill=${encodeURIComponent(s)}`).join('&');
    return this.http.get<Question[]>(`${this.API}?${query}`);
  }
}
