import { Injectable } from '@angular/core';
import questionsObj from '../data/questannaire.json';

@Injectable()
export class ConfigService {
    public static QUESTIONNAIRE_LIST = questionsObj;

    public static getQuestionList() {
        return this.QUESTIONNAIRE_LIST;
    }
}