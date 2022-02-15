import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-box-small',
  templateUrl: './select-box-small.component.html',
  styleUrls: ['./select-box-small.component.scss']
})
export class SelectBoxSmallComponent implements OnInit {

  @Input() icon: string;
  @Input() placeholder: string;
  @Input() options: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
