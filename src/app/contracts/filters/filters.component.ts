import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  options = [
    1,
    2
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
