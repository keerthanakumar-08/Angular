import { Component, Input, OnInit } from '@angular/core';
import { AlertOptions } from '../interfaces/alert';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input()
  alert!: AlertOptions;

  constructor() { }

  ngOnInit(): void {
  }

}
