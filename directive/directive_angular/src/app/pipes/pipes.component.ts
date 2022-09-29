import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  title = 'Angular pipes';  
  today = new Date();  
  pipeJson = {name: 'Keerthana', age: '24', country:{c1: 'India', c2: 'USA'}};  
  month = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  constructor() { }

  ngOnInit(): void {
  }

}
