import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {IProduct} from 'model/product'; 
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  //@Input() product: IProduct; 

  _id:string

  productID: any; 
  Product: IProduct = <IProduct>{};
  productData:any; 

  constructor(private actroute: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

    this._id = this.actroute.snapshot.params['id']
    
    this.productService.getProductById(this._id)
   .subscribe(data => {
   console.log(data)
   this.Product = data; 
   error => console.log(error); 

   
    })
  }


  loadProductDetails(productID){

    this.productService.getProductById(productID).subscribe(product => {
      this.productData = product; 
    })

  }

  navigation(link){
    this.router.navigate([link]); 
  }

}
