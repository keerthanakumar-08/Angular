import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-responsive-sidebar';
  ImagePath: string;
  
  constructor() {
    
    this.ImagePath = '/assets/images/keerthi2.jpg'
  }
}


