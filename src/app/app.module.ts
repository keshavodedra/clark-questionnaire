import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireListComponent } from './questionnaire-list/questionnaire-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionnaireComponent,
    QuestionnaireListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
