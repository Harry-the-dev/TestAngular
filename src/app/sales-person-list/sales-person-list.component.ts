import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  salesPersonList : SalesPerson[] = [
    new SalesPerson("Harry","Makhubela","harry.m@luv2code.com",50000),
    new SalesPerson("Thembi","Nyati","thembi.n@luv2code.com",40000),
    new SalesPerson("Neo","Makhubela","neo.m@luv2code.com",90000),
    new SalesPerson("Piet","Makhubela","piet.m@luv2code.com",60000),
    new SalesPerson("Rose","Masilela","rose.m@luv2code.com",45000),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
