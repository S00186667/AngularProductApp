import { Component, OnInit } from '@angular/core';
import { IProduct } from 'model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-newproductlist',
  templateUrl: './newproductlist.component.html',
  styleUrls: ['./newproductlist.component.css']
})
export class NewproductlistComponent implements OnInit {

  productList: IProduct[];
  message: string;
  showProductForm: boolean = false;

  currentProduct: IProduct;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe({
      next: (value: IProduct[]) => this.productList = value,
      complete: () => console.log('product service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked(product: IProduct): void {
    this.currentProduct = product;
  }
  openAddProduct(): void {
    this.currentProduct = null;
    this.showProductForm = true;
  }

  openEditProduct(): void {
    this.showProductForm = true;
  }

productFormClose(product: IProduct): void{
  this.showProductForm = null;
  console.table(product);
  if (product == null){
    this.currentProduct = null;
  }
  else if (this.currentProduct == null){
    this.addNewProduct(product);
  }
  else {
    console.log('need to update book with id ' + this.currentProduct._id);
    this.updateProduct(this.currentProduct._id, product)
  }
}
  
updateProduct (id: string, product: IProduct){
  this.productService.updateProduct(id, product)
  .subscribe({
    next: product => this.message = "product has been modified",
    error: (err) => this.message = err
  });

// so the updated list appears

    this.productService.getProducts().subscribe({
      next: (value: IProduct[]) => this.productList = value,
      complete: () => console.log('product service finished'),
      error: (mess) => this.message = mess
    })
}

  addNewProduct(newProduct: IProduct): void {
    console.log('adding new product ' + JSON.stringify(newProduct));
    this.productService.addProduct({ category: 'dsfdsfa', ...newProduct })
      .subscribe({
        next: product => {
          this.productList.push(newProduct)
          console.log(JSON.stringify(product) + ' has been added');
        this.message = "new product has been added";},
        error: (err) => this.message = err
      });
  }

  isSelected(product: IProduct): boolean{
    if (!product || !this.currentProduct) {
      return false;
    }
    else {
      return product._id === this.currentProduct._id;
    }
  }


}
