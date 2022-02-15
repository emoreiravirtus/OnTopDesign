import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  employees = [
    { 
      photo: 'https://i.ibb.co/6nztmNm/profile-picture-1.png',
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: 'Mar 4, 2021',
      amount: '$200 USD',
      status: 'active',
    },
    { 
      photo: 'https://i.ibb.co/C9bPf2n/profile-picture-2.png',
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: 'Mar 4, 2021',
      amount: '$200 USD',
      status: 'active',
    },
    { 
      photo: 'https://i.ibb.co/vjLqMFR/profile-picture-3.png',
      name: 'Darlene Robertson',
      type: 'Traditional',
      startDate: 'Mar 4, 2021',
      amount: '$200 USD',
      status: 'pending',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
