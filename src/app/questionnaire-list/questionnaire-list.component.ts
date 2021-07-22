import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/shared/config-service';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {

  questionnaireObj: any;
  showQuestion;
  showSubmissionMsg: boolean = false;

  constructor() {
    this.questionnaireObj = ConfigService.getQuestionList();
    this.showQuestion = this.questionnaireObj?.questionnaire?.questions[0].identifier;
  }

  ngOnInit(): void {
  }

  submitAnswer(index, question, next) {
    let isValid = false;
    isValid = this.checkValidation(question)

    if (index + 1 != this.questionnaireObj?.questionnaire?.questions.length) {
      if (isValid) {
        this.showPrevNextQuestion(next);
      }
    } else {
      this.showSubmissionMsg = true;
    }
  }

  showPrevNextQuestion(next) {
    this.showQuestion = next;
  }

  checkValidation(question) {
    if (question.question_type == 'text') {
      let txtVal = (<HTMLInputElement>document.getElementById(question.identifier)).value
      this.questionnaireObj.questionnaire.questions.find(que => que.identifier == question.identifier).value = txtVal;
      return this.checkIsValid(txtVal.length, question);
    } else {
      return this.checkIsValid(question.choices.filter(choice => choice.selected == true).length, question);
    }
  }

  checkIsValid(value, question) {
    if (value > 0 || question.required == false) {
      return true;
    } else {
      return false;
    }
  }

  updateAllSelected(question, value, isMultiple) {
    if (isMultiple == 'false') { this.questionnaireObj.questionnaire.questions.find(que => que.identifier == question.identifier).choices.find(choice => choice.selected = false) };
    this.questionnaireObj.questionnaire.questions.find(que => que.identifier == question.identifier).choices.find(choice => choice.value == value).selected = true;
  }
}
