import { Injectable } from '@angular/core';

interface Question {
  text: string;
  answers: string[];
  submitted: boolean;
  choise: string;
  correct: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuizzServiceService {
  questions: Question[] = [
    {
      text: 'What is the capital of Great Britain?',
      answers: ['Minsk', 'Warsaw', 'Berlin', 'London'],
      submitted: false,
      correct: 'd',
      choise: '',
    },
    {
      text: 'What is the best country in the world?',
      answers: ['USA', 'Germany', 'Belarus', 'Gonduras'],
      submitted: false,
      correct: 'c',
      choise: '',
    },
    {
      text: 'Who is the legal president of Belarus?',
      answers: ['Lukashenko', 'Putin', 'Tihanouskaya', 'No one'],
      submitted: false,
      correct: 'c',
      choise: '',
    },
  ];

  constructor() {}
}
