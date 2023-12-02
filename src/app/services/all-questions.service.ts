import { Injectable } from '@angular/core';
import QuestionModel from '../models/QuestionModel';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllQuestionsService {
  private questionArraySubject = new Subject<QuestionModel[]>() //this is an emitter that can be an observable.
  private correctAnswerSubject = new Subject<number|string>()
  private studentsAnswerSubject = new Subject<number|string>()
  private progressSubject = new Subject<number>()
  private indexToDisableSubject = new Subject<{index1: number, correct: boolean}>()
  private ans : number | string = "?"
  private progress : number = 0
  public index : number

  get correctAnswer$(){
    return this.correctAnswerSubject.asObservable()
  }
  
  get questionsArr$(){
    return this.questionArraySubject.asObservable()  // this function enables the observable to be private, yet accessible from other fcs.
  }
  get studentsAnswer$(){
    return this.studentsAnswerSubject.asObservable()
  }
  get progress$(){
    return this.progressSubject.asObservable()
  }
  get indexToDisable$(){
    return this.indexToDisableSubject.asObservable()
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
  this.ans = "?"
  this.correctAnswerSubject.next(this.ans)
  this.studentsAnswerSubject.next("?")
}
public initialArrEmitter(){
  this.indexToDisableSubject.next({index1 : 1, correct: false})
  this.questionArraySubject.next(this.questionsArray)
}

public returnCorrectAnswer():string | number{
    const ans = this.questionsArray[this.index].correctAnswer
    this.correctAnswerSubject.next(ans)
    return ans
  }

private progressPercentCalculation():number{
  return 100/this.questionsArray.length 
}
public findIndexOfOption(questionId : number){
  this.index = this.questionsArray.findIndex(q => q.id === questionId)
}

public progresshandler(StudentsAnswer: number){
  if(this.questionsArray[this.index].correctAnswer === StudentsAnswer){
    this.progress = this.progress + this.progressPercentCalculation()
    this.progressSubject.next(Math.trunc(this.progress))
    console.log(this.index)
    this.indexToDisableSubject.next({index1: this.index, correct: true}) // emit the index to disable

  }else{
    alert("incorrect answer!")
    // console.log(this.progressPercentCalculation)
  }
}

}
