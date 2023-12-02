import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import QuestionModel from 'src/app/models/QuestionModel';
import { AllQuestionsService } from 'src/app/services/all-questions.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit{

  @Input() public selectedClickedItem : QuestionModel
  @Output() public resultChosen = new EventEmitter<number>()
  public clickedOption: number
  public optionsDisabled = false
  public SsAnswer : any

  public constructor(private service : AllQuestionsService){

  }
  
  ngOnInit(): void {
  }
  public clickedAnswer(option : number){
    this.clickedOption = option
    this.SsAnswer = this.resultChosen.emit(option) // this is what the SS aswered
    this.service.findIndexOfOption(this.selectedClickedItem.id)
    this.service.returnCorrectAnswer() 
    this.service.progresshandler(option)
  }
}
