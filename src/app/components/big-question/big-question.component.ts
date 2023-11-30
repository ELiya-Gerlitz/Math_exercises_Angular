import { Component, Input, OnInit } from '@angular/core';
import QuestionModel from 'src/app/models/QuestionModel';

@Component({
  selector: 'app-big-question',
  templateUrl: './big-question.component.html',
  styleUrls: ['./big-question.component.css']
})
export class BigQuestionComponent implements OnInit{
  @Input() public chosenItemToDisplayLarge :QuestionModel 
  
  
  ngOnInit(): void {

  }

}
