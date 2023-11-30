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
  public chosenItemToDisplayLarge : QuestionModel={
    id: 0,
    quetionText: '',
    correctAnswer: 0,
    options: [],
    studentsAnswers: 0
  } 

  public constructor(private allQuestionsService: AllQuestionsService){
}
  ngOnInit(): void {
    this.allQuestionsService.questionsArr$.subscribe(arr=>{
      this.arr = arr
    })
    this.allQuestionsService.click_singleBTN()
  }

  public selectedItem(item : QuestionModel){
    this.selectedHoveredItem = item
  }

  public emitChosenExercise( item: QuestionModel ) {
      console.log(item, "I am the emitted" )
      this.chosenItemToDisplayLarge = item
      this.chosenItemToDisplayLarge.quetionText = item.quetionText 
      this.selectedClickedItem = item
  }
   

}
