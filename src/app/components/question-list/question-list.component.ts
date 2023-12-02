import { Component, OnInit} from '@angular/core';
import QuestionModel from 'src/app/models/QuestionModel';
import { AllQuestionsService } from 'src/app/services/all-questions.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit{
  public arr: QuestionModel[]
  public selectedHoveredItem : QuestionModel // needs to be different from selectedHoveredItem !== selectedClickedItem because of the UI 
  public selectedClickedItem : QuestionModel // needs to be different from selectedHoveredItem !== selectedClickedItem because of the UI 
  ={
    id: 0,
    quetionText: '',
    correctAnswer: 0,
    options: [],
    studentsAnswers: 0
  } 
  public correctAnswer : number | string = "?"

  public constructor(private allQuestionsService: AllQuestionsService){
}
  ngOnInit(): void {
    this.allQuestionsService.questionsArr$.subscribe(arr=>{
      this.arr = arr
      this.allQuestionsService.correctAnswer$.subscribe(a =>{
        this.correctAnswer = a
      })
      
    })
    this.allQuestionsService.initialArrEmitter()
    this.allQuestionsService.returnCorrectAnswer("?")
    
  }
  
  public selectedItem(item : QuestionModel){
    this.selectedHoveredItem = item
  }
  
  public emitChosenExercise( item: QuestionModel ) {
      this.allQuestionsService.click_singleBTN()
      this.selectedClickedItem = item
      this.selectedClickedItem.quetionText = item.quetionText 
  }
    
}
