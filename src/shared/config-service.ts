import { Injectable } from '@angular/core';
import questionsObj from '../data/questannaire.json';
import { Observable, of } from 'rxjs';
@Injectable()
export class ConfigService {
    public static QUESTIONNAIRE_LIST = questionsObj;

    public static getQuestionList(): Observable<any> {
        return of(this.QUESTIONNAIRE_LIST);
    }
}