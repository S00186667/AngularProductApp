import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { ConsoleReporter } from 'jasmine';
import { IProduct } from 'model/product';
import { ProductCrudComponent } from '../product-crud/product-crud.component';
import { ProductService } from '../product.service';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms'; 

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {


  _id:string
  productList: IProduct;
  productForm: FormGroup;  

  message:string;
  @Input() product : IProduct; 

  

  constructor(private route: ActivatedRoute, private router: Router, 
    private productService: ProductService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {this._id = this.route.snapshot.params['id']; 

  /*this.productForm = new FormGroup({
    name: new FormControl(this.product.name, [Validators.required, Validators.minLength(3)]), 
    isbn: new FormControl(this.product.isbn, [Validators.required]), 
    category: new FormControl(this.product.category, [Validators.required])
  })*/

  this.productForm = this.formBuilder.group({
    name: ["", Validators.required],
    category: ["", Validators.required],
    brand: ["", Validators.required],
    price: ["", Validators.required], 
    isbn: ["", Validators.required],
    imageurl: ["", Validators.required]
  }); 



this.productService.getProductById(this._id)
.subscribe(data => {
  console.log(data)
  this.productList = data; 
  error => console.log(error); 
})

}

  updateProduct(){
    this.productService.updateProduct(this._id, this.productList)
    .subscribe({
      next: product => this.message  ="product has been modified", 
      error: (err) => this.message = err
    }); 
  }


  onSubmit(){
    this.updateProduct(); 
  }


}
