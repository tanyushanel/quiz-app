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

  onSubmitResult(): void {}

  isAllSelected(): boolean {
    for (let i = 0; i < this.questionList.length; i++) {
      if (this.questionList[i].choise === '' || !this.questionList[i].choise) {
        return false;
      }
    }
    return true;
  }

  previewSelected(): void {
    for (const item of this.questionList) {
      // this.selectedCase = item.choise;
    }
  }

  goBack(): void {
    window.history.back();
  }
}
