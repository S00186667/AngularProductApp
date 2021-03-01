import { Component, Input, OnInit } from '@angular/core';
import{IProduct} from 'model/product'; 
 
@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input() product:IProduct; 

  constructor() { }

  ngOnInit(): void {
  }

}
