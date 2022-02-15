import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-box-big',
  templateUrl: './select-box-big.component.html',
  styleUrls: ['./select-box-big.component.scss']
})
export class SelectBoxBigComponent implements OnInit {

  @Input() icon: string;
  @Input() placeholder: string;
  @Input() options: Array<any>;

  active = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
    if(this.router.url === `/${this.placeholder.toLocaleLowerCase()}`){
      this.active = true;
    }
    else if((this.router.url === '/' && this.placeholder.toLocaleLowerCase() == 'contracts')) {
      this.active = true;
    }
  }

}
