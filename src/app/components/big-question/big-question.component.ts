import { Component, Input, OnInit } from '@angular/core';
import QuestionModel from 'src/app/models/QuestionModel';
import { AllQuestionsService } from 'src/app/services/all-questions.service';

@Component({
  selector: 'app-big-question',
  templateUrl: './big-question.component.html',
  styleUrls: ['./big-question.component.css']
})
export class BigQuestionComponent implements OnInit{
  @Input() public selectedClickedItem :QuestionModel 
  public studentsAnswer: any = "?"
  public correctAnswer : number |string = "?"
  
  public constructor(private exercisesService: AllQuestionsService){
    
  }
  ngOnInit(): void {
    this.exercisesService.correctAnswer$.subscribe(correct=>{
      this.correctAnswer = correct
    })
    this.exercisesService.studentsAnswer$.subscribe(ssAns => {
      this.studentsAnswer = ssAns
    })
  }
  public emittedOption(chosenOption:number){
    this.studentsAnswer = chosenOption
  }
  
}
