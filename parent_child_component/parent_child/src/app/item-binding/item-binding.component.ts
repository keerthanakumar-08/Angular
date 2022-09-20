import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-item-binding',
  templateUrl: './item-binding.component.html',
  styleUrls: ['./item-binding.component.css']
})
export class ItemBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  item! : string ;

}
