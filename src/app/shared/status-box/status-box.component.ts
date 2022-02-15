import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-box',
  templateUrl: './status-box.component.html',
  styleUrls: ['./status-box.component.scss']
})
export class StatusBoxComponent implements OnInit {

  @Input() status: string;

  constructor() { }

  ngOnInit(): void {
  }

}
