import { Component, OnInit } from '@angular/core';
import {Address} from './address';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  age: number;
  address: Address;

  constructor() { }

  ngOnInit() {
    this.age = 30;
    this.address = {
      street: 'fernvale road',
      city: 'singapore'
    };
  }

}
