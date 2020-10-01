import { QuizzService, Question } from '../quizz.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss'],
})
export class QuestionPageComponent implements OnInit {
  question: BehaviorSubject<Question>;
  value: string;

  constructor(public quizzService: QuizzService) {}

  ngOnInit(): void {
    this.question = this.quizzService.currentQuestion;
  }

  get isNextButtonDisabled(): boolean {
    return this.quizzService.isLastQuestion;
  }

  get isPrevButtonDisabled(): boolean {
    return this.quizzService.isFirstQuestion;
  }

  get isValueSelected(): boolean {
    if (this.value) {
      return true;
    }
    return false;
  }

  onMoveToPrevClick(): void {
    this.quizzService.moveToPrevQuestion();
    this.value = this.quizzService.currentQuestion.value.choise;
  }

  onMoveToNextClick(): void {
    this.quizzService.moveToNextQuestion();
    this.value = this.quizzService.currentQuestion.value.choise;
  }

  onSubmitQuestion(): void {
    this.quizzService.submitQuestion(this.value);
  }
}
