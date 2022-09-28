import { Component, Input, OnInit } from '@angular/core';
import { CardOptions } from '../interfaces/card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  card!: CardOptions;
  
  constructor() { }

  ngOnInit(): void {
  }

}
