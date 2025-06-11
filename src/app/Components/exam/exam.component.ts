import { Component, OnInit, inject } from '@angular/core';
import { QuestionService, Question } from '../../Core/Services/question.service';
import { Router } from '@angular/router';
import { NgIf,NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  imports:[NgFor,NgIf,FormsModule,NgClass],
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex = 0;
  userAnswers: string[] = [];
  quizFinished = false;
  score = 0;
  showResults = false;
  attempts = 0;
  maxAttempts = 2;
  resultMessage = '';
  isPassed = false;

  totalTime = 600; 
  timerDisplay = '';
  timerInterval: any;

  // constructor(private questionService: QuestionService) {}

  constructor(private questionService: QuestionService, private router: Router) {}

  ngOnInit(): void {
    const storedAttempts = localStorage.getItem('examAttempts');
    this.attempts = storedAttempts ? +storedAttempts : 0;

    if (this.attempts >= this.maxAttempts) {
      alert('You have reached the maximum number of attempts.');
      this.router.navigate(['/']); 
      return;
    }

    this.questionService.getQuestions(['JavaScript', 'Programming Principles']).subscribe({
      next: (res: any) => {
        this.questions = res.questions;
        this.userAnswers = new Array(this.questions.length).fill('');
        this.startTimer();
      }
    });
  }
finishQuiz() {
  if (this.quizFinished) return;
  this.quizFinished = true;
  clearInterval(this.timerInterval);

  this.score = this.questions.reduce((acc, q, i) =>
    acc + (q.correct === this.userAnswers[i] ? 1 : 0), 0);

  const percentage = (this.score / this.questions.length) * 100;

  console.log('Exam Finished ');
  console.log(`Your score: ${this.score} out of ${this.questions.length}`);
  console.log(`Percentage: ${percentage.toFixed(2)}%`);

  if (percentage >= 70) {
    this.resultMessage = ' Congratulations! You passed the exam.';
    this.isPassed = true;
    console.log(' Congratulations! You passed the exam.');
  } else {
    this.resultMessage = ' Unfortunately, you did not pass the exam.';
    this.isPassed = false;
    console.log(' Unfortunately, you did not pass the exam.');
  }

  this.attempts++;
  localStorage.setItem('examAttempts', this.attempts.toString());
}




confirmFinish() {
  const confirmEnd = confirm('Are you sure you want to end the quiz?');
  if (confirmEnd) {
    this.finishQuiz();
  }
}


  startTimer() {
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.totalTime--;
      this.updateTimerDisplay();
      if (this.totalTime <= 0) {
        this.finishQuiz();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const minutes = Math.floor(this.totalTime / 60);
    const seconds = this.totalTime % 60;
    this.timerDisplay = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  selectAnswer(answer: string) {
    this.userAnswers[this.currentQuestionIndex] = answer;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.finishQuiz();
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }


  toggleResults() {
    this.showResults = !this.showResults;
  }
}
