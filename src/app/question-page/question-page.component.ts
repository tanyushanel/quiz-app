import { QuizzService, Question } from '../quizz.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss'],
})
export class QuestionPageComponent implements OnInit {
  question: BehaviorSubject<Question>;

  constructor(private quizzService: QuizzService) {}

  ngOnInit(): void {
    this.question = this.quizzService.currentQuestion;
  }

  moveToNext(): void {
    this.quizzService.moveToNextQuestion();
  }

  onMoveToPrevClick(): void {
    this.quizzService.moveToPrevQuestion();
  }

  onMoveToNextClick(): void {
    this.quizzService.moveToNextQuestion();
  }

  get isNextButtonDisabled(): boolean {
    return this.quizzService.isLastQuestion;
  }

  get isPrevButtonDisabled(): boolean {
    return this.quizzService.isFirstQuestion;
  }

  onSubmitQuestion(): void {
    this.quizzService.submitQuestion();
  }
}
