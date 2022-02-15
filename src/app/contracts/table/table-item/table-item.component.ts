import { Component, Input, OnInit } from '@angular/core';
import { TableItemObject } from './table-item-object';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit {

  @Input() tableItem: TableItemObject;

  constructor() { }

  ngOnInit(): void {
  }

}
