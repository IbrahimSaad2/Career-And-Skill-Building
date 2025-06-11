
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css',
})
export class ExamComponent implements OnInit {
   questions = [
    { id: 1, question: 'Question 1?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' },
    { id: 2, question: 'Question 2?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'B' },
    { id: 3, question: 'Question 3?', options: ['A', 'B', 'C', 'D'], correctAnswer: 'C' }
  ];

   currentQuestionIndex = 0;
  answers: { [key: number]: string } = {};
  totalTime = 300;
  remainingTime = this.totalTime;
  timerSubscription!: Subscription;
  examStarted = false;
  examFinished = false;
  examResult = '';
  attempts = 0;
  maxAttempts = 2;

  ngOnInit(): void {
    const storedAttempts = localStorage.getItem('examAttempts');
    this.attempts = storedAttempts ? parseInt(storedAttempts) : 0;
  }

  startExam() {
    if (this.attempts >= this.maxAttempts) return;
    this.examStarted = true;
    this.examFinished = false;
    this.answers = {};
    this.remainingTime = this.totalTime;
    this.currentQuestionIndex = 0;
    this.startTimer();
  }

  startTimer() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.remainingTime--;
      if (this.remainingTime <= 0) {
        this.submitExam();
      }
    });
  }

  selectAnswer(option: string) {
    const questionId = this.questions[this.currentQuestionIndex].id;
    this.answers[questionId] = option;
    console.log(this.answers);
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.submitExam();
    }
  }

  submitExam() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this.examStarted = false;
    this.examFinished = true;

    let score = 0;
    this.questions.forEach(q => {
      if (this.answers[q.id] === q.correctAnswer) {
        score++;
      }
    });

    const percentage = (score / this.questions.length) * 100;
    this.examResult = percentage >= 50 ? ' Passed' : ' Failed';

    this.attempts++;
    localStorage.setItem('examAttempts', this.attempts.toString());
  }

  get progress(): number {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }
}
