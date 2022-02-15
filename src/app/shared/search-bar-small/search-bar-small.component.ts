import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar-small',
  templateUrl: './search-bar-small.component.html',
  styleUrls: ['./search-bar-small.component.scss']
})
export class SearchBarSmallComponent implements OnInit {

  @Input() placeholder: string;

  constructor() { }

  ngOnInit(): void {
  }

}
