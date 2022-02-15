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
  ];

  dropDownOptions = [
    { name: 'edit', icon: 'edit', type: 'dark-gray' },
    { name: 'sign', icon: 'sign', type: 'dark-gray' },
    { name: 'view summary', icon: 'file-text', type: 'dark-gray' },
    { name: 'delete', icon: 'trash', type: 'primary' }

  ]



  constructor() { }

  ngOnInit(): void {
  }

}
