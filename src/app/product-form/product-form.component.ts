import {EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'; 
import {IProduct} from 'model/product'; 
import {ProductService} from '../product.service'; 

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() product : IProduct; 

  @Output() productFormCLose = new EventEmitter<IProduct>(); 


  message: string =''; 
  isNewProductForm: boolean = false; 
  productForm: FormGroup; 


  get name(){
    return this.productForm.get('name'); 
  }

  get isbn(){
    return this.productForm.get('isbn')
  }

  get category(){
    return this.productForm.get('category'); 
  }

  constructor() { }

  ngOnInit(): void {

    console.table(this.product); 
    if(this.product == null){
      this.product={name:'', isbn: '', category: '', price: '', brand: '', id: '', imageURL: ''};
      this.isNewProductForm = true; 
    }

    this.productForm = new FormGroup({
      name: new FormControl(this.product.name, [Validators.required, Validators.minLength(3)]), 
      isbn: new FormControl(this.product.isbn, [Validators.required]), 
      category: new FormControl(this.product.category, [Validators.required])
    })
  }

  onSubmit(){
    this.productFormCLose.emit(this.productForm.value)
  }

  closeForm(){
    this.productFormCLose.emit(null)
  }

}
