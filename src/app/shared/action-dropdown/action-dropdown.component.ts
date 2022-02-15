import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActionDropdownObject } from './action-dropdown-object';

@Component({
  selector: 'app-action-dropdown',
  templateUrl: './action-dropdown.component.html',
  styleUrls: ['./action-dropdown.component.scss']
})
export class ActionDropdownComponent implements OnInit {

  @ViewChild('actionDropdown') el:ElementRef;

  @Input() options: Array<ActionDropdownObject>;

  constructor() { }

  ngOnInit(): void {
  }

  toggleActionDropdown() {
    this.el.nativeElement.style.display = 'flex';
    this.el.nativeElement.focus();
  }

  onBlur() {
    this.el.nativeElement.style.display = 'none';
  }
}
