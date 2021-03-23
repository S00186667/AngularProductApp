import { Component, OnInit } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';
import {IProduct} from 'model/product'; 
//import { runInThisContext } from 'vm';
import {ProductService} from '../product.service'; 
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:IProduct[]; 

  message:string;
  
  showProductForm: boolean = false; 


  currentProduct :IProduct; 

  wishList: any[] = []

  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.loadProducts(); 
    this.loadWishlist(); 
 
  }

  loadProducts(){

    this.productService.getProducts().subscribe({
      next:(value: IProduct[])=> this.productList = value, 
      complete: () => console.log('product service finished'), 
      error:(mess) => this.message = mess
    })

  }

  loadWishlist(){
    this.wishlistService.getWishList().subscribe(productIds => {
      this.wishList = productIds
      console.log(productIds)
    })
      
  }

  clicked(product: IProduct):void{
    this.currentProduct = product; 
  }
  openAddProduct():void{
    this.currentProduct = null; 
    this.showProductForm = true; 
  }

  openEditProduct(): void{
    this.showProductForm = true; 
  }


  productFormClose(product: IProduct):void{
    this.showProductForm = null; 
    console.table(product); 
    if(product == null){
      this.currentProduct =null; 
    }
    else if(this.currentProduct == null){
      this.addNewProduct(product); 
    }
    else{
      console.log('need to update product wih id ' + this.currentProduct._id)

      this.updateProduct(this.currentProduct._id,product)
    }
  }

  updateProduct(id: string, product: IProduct){
    this.productService.updateProduct(id, product)
    .subscribe({
      next: product => this.message  ="product has been modified", 
      error: (err) => this.message = err
    }); 


    this.productService.getProducts().subscribe({
      next:(value: IProduct[]) => this.productList = value,
      complete: () => console.log('book service finsihed'), 
      error: (mess) => this.message = mess
    })
  }

  addNewProduct(newProduct: IProduct):void{
    console.log('adding new book' + JSON.stringify(newProduct)); 
    this.productService.addProduct({...newProduct})
    .subscribe({
      next:product => {
        console.log(JSON.stringify(product)+ 'has been added'); 
        this.message = "new book has been added";}, 
        error:(err)=> this.message = err
    });
  }

  isSelected(product: IProduct):boolean{
    if(!product ||!this.currentProduct){
      return false; 
    }
    else{
      return product._id === this.currentProduct._id; 
    }
  }

}
