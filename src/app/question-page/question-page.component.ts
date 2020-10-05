import { QuizzService, Question } from '../quizz.service';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss'],
})
export class QuestionPageComponent implements OnInit {
  questionList: Question[] = this.quizzService.questions;
  question: BehaviorSubject<Question>;
  selectedCase: string;

  constructor(public quizzService: QuizzService) {}

  ngOnInit(): void {
    this.question = this.quizzService.currentQuestion;
    this.selectedCase = this.quizzService.currentQuestion.value.choise;
  }

  get isNextButtonDisabled(): boolean {
    return this.quizzService.isLastQuestion;
  }

  get isPrevButtonDisabled(): boolean {
    return this.quizzService.isFirstQuestion;
  }

  get isValueSelected(): boolean {
    if (this.selectedCase) {
      return true;
    }
    return false;
  }

  onMoveToPrevClick(): void {
    this.quizzService.moveToPrevQuestion();
    this.selectedCase = this.quizzService.currentQuestion.value.choise;
  }

  onMoveToNextClick(): void {
    this.quizzService.moveToNextQuestion();
    this.selectedCase = this.quizzService.currentQuestion.value.choise;
  }

  onSelectQuestion(): void {
    this.quizzService.selectQuestion(this.selectedCase);
  }
}
