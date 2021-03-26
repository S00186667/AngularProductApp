import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'model/product';

import {ProductService} from '../product.service'; 

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css']
})
export class NewProductFormComponent implements OnInit {

  @Input() product : IProduct;

  message: string =''; 

  productForm: FormGroup; 



  get name(){
   return this.productForm.get('name'); 
  }

  get isbn(){
    return this.productForm.get('isbn'); 
  }

  get category(){
    return this.productForm.get('category'); 
  }

  get brand(){
    return this.productForm.get('brand'); 
  }

  get price(){
    return this.productForm.get('price'); 
  }

  get imageurl(){
    return this.productForm.get('imageurl'); 
  }

  constructor( private productService: ProductService) { }

  ngOnInit(): void {

    console.table(this.product); 
    if(this.product == null){
      this.product = {name:'', isbn:'', category: '', brand: '', price: '', imageURL: '', _id: ''}; 
    }
  


  this.productForm = new FormGroup({
    name: new FormControl([Validators.required, Validators.minLength(3)]), 
    isbn: new FormControl([Validators.required]), 
    category: new FormControl([Validators.required]),
    brand: new FormControl([Validators.required]), 
    price: new FormControl([Validators.required]), 
    imageurl: new FormControl([Validators.required])
  })


  
}

addNewProduct() {
  this.productService.addProduct(this.product)
    .subscribe({
      next: product => {
        console.log(JSON.stringify(product) + ' has been added');
      this.message = "new product has been added";},
      error: (err) => this.message = err
    });
}

 onSubmit(){
    
    this.productService.addProduct(this.productForm.value)
    .subscribe(() => {
      console.log('data added sucessfully')
    })

  

  
  }

 

  

}


