import { Component } from '@angular/core';
import { Alerts } from './interfaces/alert';
import { Cards } from './interfaces/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reusable';
  name = 'Angular';
  alerts = Alerts;
  cards = Cards;
}
