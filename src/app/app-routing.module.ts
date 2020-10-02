import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewPageComponent } from './preview-page/preview-page.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { ScorePageComponent } from './score-page/score-page.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'question', component: QuestionPageComponent },
  { path: 'preview', component: PreviewPageComponent },
  { path: 'score', component: ScorePageComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
