import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Question {
  text: string;
  answers: string[];
  submitted: boolean;
  choise: string;
  correct: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  questions: Question[] = [
    {
      text: 'What is the capital of Great Britain?',
      answers: ['Minsk', 'Warsaw', 'Berlin', 'London'],
      submitted: false,
      correct: 'London',
      choise: '',
    },
    {
      text: 'What is the best country in the world?',
      answers: ['USA', 'Germany', 'Belarus', 'Gonduras'],
      submitted: false,
      correct: 'Belarus',
      choise: '',
    },
    {
      text: 'Who is the legal president of Belarus?',
      answers: ['Lukashenko', 'Putin', 'Tihanouskaya', 'No one'],
      submitted: false,
      correct: 'Tihanouskaya',
      choise: '',
    },
  ];

  index = 0;

  currentQuestion: BehaviorSubject<Question> = new BehaviorSubject<Question>(
    this.questions[this.index]
  );

  constructor() {}

  get isLastQuestion(): boolean {
    if (
      this.questions.indexOf(this.currentQuestion.value) ===
      this.questions.length - 1
    ) {
      return true;
    }
    return false;
  }

  set isLastQuestion(value) {
    this.isLastQuestion = value;
  }

  get isFirstQuestion(): boolean {
    if (this.questions.indexOf(this.currentQuestion.value) === 0) {
      return true;
    }
    return false;
  }

  set isFirstQuestion(value) {
    this.isFirstQuestion = value;
  }

  moveToNextQuestion(): void {
    if (!this.isLastQuestion) {
      this.currentQuestion.next(this.questions[this.index + 1]);
      this.index += 1;
    }
  }

  moveToPrevQuestion(): void {
    if (!this.isFirstQuestion) {
      this.currentQuestion.next(this.questions[this.index - 1]);
      this.index -= 1;
    }
  }

  selectQuestion(choise): void {
    this.currentQuestion.value.choise = choise;
    this.currentQuestion.value.submitted = true;
  }

  calcResults(): number {
    let result = 0;
    for (const item of this.questions) {
      if (item.choise === item.correct) {
        result += 1;
      }
    }
    return result;
  }

  refreshToStart(): void {
    this.index = 0;
    this.currentQuestion.next(this.questions[0]);
    for (const item of this.questions) {
      item.choise = '';
    }
  }

  goBack(): void {
    window.history.back();
    this.currentQuestion.next(this.currentQuestion.value);
  }
}
