import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  myProperty = 'This is an sample for ngModel';

  constructor() { }

  ngOnInit(): void {
  }

}
