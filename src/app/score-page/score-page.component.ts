import { Component, OnInit } from '@angular/core';
import { Question, QuizzService } from '../quizz.service';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss'],
})
export class ScorePageComponent implements OnInit {
  questionList: Question[] = this.quizzService.questions;
  value: string;

  constructor(private quizzService: QuizzService) {}

  ngOnInit(): void {}

  get scoreResult(): number {
    return this.quizzService.calcResults();
  }

  onRefreshToStart(): void {
    this.quizzService.refreshToStart();
  }
}
