import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  number = 0;
  food = 'apple';

  increment(_event: MouseEvent) {
    this.number++;
  }

  // results() {
  //   if (this.number > 1 && this.number < 5) {
  //     return this.number;
  //   }
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
