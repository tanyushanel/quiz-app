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
      correct: 'Warsaw',
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
    if (this.index === this.questions.length - 1) {
      return true;
    }
    return false;
  }

  get isFirstQuestion(): boolean {
    if (this.index === 0) {
      return true;
    }
    return false;
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
    return;
  }
}
