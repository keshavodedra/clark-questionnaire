import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/shared/config-service';

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {

  public questionnnareResponse;

  constructor() {
    this.questionnnareResponse = ConfigService.getQuestionList();
    console.log(this.questionnnareResponse)

  }

  ngOnInit(): void {
  }

}
