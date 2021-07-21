import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireListComponent } from './questionnaire-list/questionnaire-list.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

const routes: Routes = [
  {
    path: 'questionnaire-list',
    component: QuestionnaireListComponent
  },
  {
    path: '',
    component: QuestionnaireComponent
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
