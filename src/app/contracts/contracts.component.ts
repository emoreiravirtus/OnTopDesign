import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  options = [
    1,
    2
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
