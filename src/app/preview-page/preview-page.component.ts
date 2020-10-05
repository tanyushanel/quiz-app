import { Component, OnInit } from '@angular/core';
import { Question, QuizzService } from '../quizz.service';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.scss'],
})
export class PreviewPageComponent implements OnInit {
  questionList: Question[] = this.quizzService.questions;

  constructor(private quizzService: QuizzService) {}

  ngOnInit(): void {}

  onSubmitResult(): void {}

  isAllSelected(): boolean {
    for (const item of this.questionList) {
      if (item.choise === '' || !item.choise) {
        return false;
      }
    }
    return true;
  }

  onGoBack(): void {
    this.quizzService.goBack();
  }
}
