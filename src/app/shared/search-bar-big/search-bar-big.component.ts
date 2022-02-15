import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar-big',
  templateUrl: './search-bar-big.component.html',
  styleUrls: ['./search-bar-big.component.scss']
})
export class SearchBarBigComponent implements OnInit {

  @ViewChild('searchBarBigInput') el:ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  focus() {
    this.el.nativeElement.focus();
  }

}
