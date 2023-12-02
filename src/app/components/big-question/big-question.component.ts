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
  public correctAnswer : number |string
  
  public constructor(private exercisesService: AllQuestionsService){
    
  }
  ngOnInit(): void {
    this.exercisesService.correctAnswer$.subscribe(correct=>{
      this.correctAnswer = correct
    })
  }
  public emittedOption(chosenOption:number){
    console.log(chosenOption, "in big from emitter")
    this.studentsAnswer = chosenOption
  }
  

}
