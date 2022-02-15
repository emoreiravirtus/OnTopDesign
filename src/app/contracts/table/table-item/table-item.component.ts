import { Component, Input, OnInit } from '@angular/core';
import { TableItemObject } from './table-item-object';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit {

  @Input() tableItem: TableItemObject;

  dropDownOptions = [
    { name: 'edit', icon: 'edit', type: 'dark-gray' },
    { name: 'sign', icon: 'sign', type: 'dark-gray' },
    { name: 'view summary', icon: 'file-text', type: 'dark-gray' },
    { name: 'delete', icon: 'trash', type: 'primary' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
