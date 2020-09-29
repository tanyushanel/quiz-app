import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PreviewPageComponent } from './preview-page/preview-page.component';
import { ScorePageComponent } from './score-page/score-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { QuestionPageComponent } from './question-page/question-page.component';

const appRoutes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'question', component: QuestionPageComponent },
  { path: 'preview', component: PreviewPageComponent },
  { path: 'score', component: ScorePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PreviewPageComponent,
    ScorePageComponent,
    StartPageComponent,
    QuestionPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
