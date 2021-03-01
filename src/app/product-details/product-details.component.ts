import { Component, Input, OnInit } from '@angular/core';
import {IProduct} from 'model/product'; 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: IProduct; 

  constructor() { }

  ngOnInit(): void {
  }

}
