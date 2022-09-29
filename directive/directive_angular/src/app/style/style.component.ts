import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  

  styleObject = {
    // borderBottom: '3px solid lightgreen'
    ['border-bottom']: '3px solid lightgreen'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
