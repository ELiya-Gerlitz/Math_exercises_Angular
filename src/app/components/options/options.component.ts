import { Component, Input, OnInit } from '@angular/core';
import QuestionModel from 'src/app/models/QuestionModel';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit{

  @Input() public chosenItemToDisplayLarge : QuestionModel
  // public embedded : number
  
  ngOnInit(): void {
    // this.embedded = this.chosenItemToDisplayLarge.options[1]
    console.log(this.chosenItemToDisplayLarge.options[1])
    console.log(this.chosenItemToDisplayLarge)
  }

  




}
