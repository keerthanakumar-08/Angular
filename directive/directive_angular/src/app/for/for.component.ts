import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  plans = [
    {
      name: "Bags",
      premiumInDollars: 200,
      validityInYears: 1
    },
    {
      name: "Gold",
      premiumInDollars: 250,
      validityInYears: 3
    },
    {
      name: "silver",
      premiumInDollars: 300,
      validityInYears: 5
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
