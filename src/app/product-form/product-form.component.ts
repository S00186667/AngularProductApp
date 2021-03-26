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
  productList: IProduct[];


  get name(){
    return this.productForm.get('name'); 
  }

  get brand(){
    return this.productForm.get('brand'); 
  }

  get isbn(){
    return this.productForm.get('isbn')
  }
  get price(){
    return this.productForm.get('price'); 
  }

  get category(){
    return this.productForm.get('category'); 
  }

  get imageURL(){
    return this.productForm.get('imageURL'); 
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    console.table(this.product); 
    if(this.product == null){
      this.product={name:'', isbn: '', category: '', brand: '', price: '', _id: '', imageURL: ''};
      this.isNewProductForm = true; 
    }

    this.productForm = new FormGroup({
      name: new FormControl(this.product.name, [Validators.required, Validators.minLength(3)]),
      category: new FormControl(this.product.name, [Validators.required, Validators.minLength(3)]), 
      brand: new FormControl(this.product.name, [Validators.required, Validators.minLength(3)]),  
      price: new FormControl(this.product.isbn, [Validators.required]), 
      isbn: new FormControl(this.product.category, [Validators.required]),
      imageURL: new FormControl(this.product.category, [Validators.required])
    })
  }

  onSubmit(){
    this.productFormCLose.emit(this.productForm.value)
    this.addNewProduct(this.productForm.value)

   

    console.log('forms submitted with ' + JSON.stringify(this.productForm.value))
  }

  addNewProduct(newProduct: IProduct): void {
    console.log('adding new product ' + JSON.stringify(newProduct));
    this.productService.addProduct({ category: 'dsfdsfa', ...newProduct })
      .subscribe({
        next: product => {
          console.log(JSON.stringify(product) + ' has been added');
        this.message = "new product has been added";},
        error: (err) => this.message = err
      });
  }

  closeForm(){
    this.productFormCLose.emit(null)
  }

}
