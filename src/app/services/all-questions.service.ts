import { Injectable } from '@angular/core';
import QuestionModel from '../models/QuestionModel';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllQuestionsService {
  private questionArraySubject = new Subject<QuestionModel[]>() //this is an emitter that can be an observable.
  
  get questionsArr$(){
    return this.questionArraySubject.asObservable()  // this function enables the observable to be private, yet accessible from other fcs.
  }

  private questionsArray: QuestionModel[] = [
    {id: 1, quetionText : "2+2", correctAnswer: 4, studentsAnswers: 0, options: [10,6,8,4]},
    {id: 2, quetionText : "3+6", correctAnswer: 9, studentsAnswers: 0, options: [10,9,8,4]},
    {id: 3, quetionText : "2+6", correctAnswer: 8, studentsAnswers: 0, options: [10,17,8,4]},
    {id: 4, quetionText :  "4+7", correctAnswer: 11, studentsAnswers: 0, options: [10,11,8,4]},
    {id: 5, quetionText : "1+9", correctAnswer: 10, studentsAnswers: 0, options: [10,6,8,4]},
    {id: 6, quetionText :  "12+1", correctAnswer: 13, studentsAnswers: 0, options: [10,6,8,13]}
  ]


public click_singleBTN(){
  this.questionArraySubject.next(this.questionsArray)
}

  constructor() { }
}
