import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-box-small',
  templateUrl: './select-box-small.component.html',
  styleUrls: ['./select-box-small.component.scss']
})
export class SelectBoxSmallComponent implements OnInit {

  @ViewChild('selectBoxSmallInput') el:ElementRef;

  @Input() icon: string;
  @Input() placeholder: string;
  @Input() options: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

  focus() {
    this.el.nativeElement.style.size = '100px';
  }

}
