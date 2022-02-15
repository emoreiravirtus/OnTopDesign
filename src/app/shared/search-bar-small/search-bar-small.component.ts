import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar-small',
  templateUrl: './search-bar-small.component.html',
  styleUrls: ['./search-bar-small.component.scss']
})
export class SearchBarSmallComponent implements OnInit {
  
  @ViewChild('searchBarSmallInput') el:ElementRef;

  @Input() placeholder: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  focus() {
    this.el.nativeElement.focus();
  }

}
