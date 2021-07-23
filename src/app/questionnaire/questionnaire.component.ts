import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  description: string = "Hey there. Interested in our product? Answer a few short questions and we'll get in touch with you!";
  description_note: string = "This will not take more than 5 minutes";

  constructor() { }

  ngOnInit(): void {
  }

}
