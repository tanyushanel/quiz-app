import { Component, OnInit } from '@angular/core';
import { Question, QuizzService } from '../quizz.service';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.scss'],
})
export class PreviewPageComponent implements OnInit {
  questionList: Question[] = this.quizzService.questions;
  selectedCase: string;

  constructor(private quizzService: QuizzService) {}

  ngOnInit(): void {}

  onSubmitResult(): void {
    //todo: redirect to results page
  }

  goBack(): void {
    window.history.back();
  }
}
