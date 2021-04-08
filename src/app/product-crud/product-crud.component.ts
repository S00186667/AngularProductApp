import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {IProduct} from 'model/product'
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {


  products: IProduct[];  
  message:string;

  currentproduct: IProduct; 

  constructor(private productservice: ProductService, 
    private router: Router) { }



  ngOnInit(): void {
    this.loadProducts(); 
  }


  clicked(product: IProduct):void{
    this.currentproduct = product; 
    console.log(this.currentproduct._id); 
  }

  loadProducts(){

    this.productservice.getProducts().subscribe({
      next:(value: IProduct[])=> this.products = value, 
      complete: () => console.log('product service finished'), 
      error:(mess) => this.message = mess
    })

  }


  deleteProduct(_id: string, product: IProduct)
  {
    console.log('deleting product'); 

    this.productservice.deleteProduct(product._id)
    .subscribe({
      next:product => this.message = "product is deleted", 
      complete: () => console.log("deleted product"), 
      error: (mess) => this.message = mess
    })
  }


  /*deleteProduct(id: string){
    this.productservice.deleteProduct(id)
    .subscribe(
      data => {
        console.log(data); 
      }, 
      error => console.log(error));
    }*/


    updateProduct(_id: string){
      this.router.navigate(['update', _id]);
    }

    detailproduct(_id: string){
      this.router.navigate(['detail', _id]); 
    }

}
