import { Component, OnInit } from '@angular/core';


import {MessengerService} from 'src/app/messenger.service'


import {IProduct} from 'model/product'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems =[
    // {id: 1, productID: 1, productName: 'Test1', qty: 4 ,price: 100, },
    // {id: 2, productID: 3, productName: 'Test3',qty: 5, price: 100, },
    // {id: 3, productID: 2, productName: 'Test4', qty: 3, price: 100, },
    // {id: 4, productID: 4, productName: 'Test5', qty: 2, price: 100, },
    
  ]; 

  cartTotal =0; 

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {


    this.msg.getMsg().subscribe((product: IProduct) => {
     // console.log(product); 

     this.addProductToCart(product)
   
    })
    
  }

  addProductToCart(product: IProduct){

    if(this.cartItems.length === 0){
      this.cartItems.push({
        productID: product.isbn,
        productName: product.name, 
        price: product.price
      })
    }else{

      for(let i in this.cartItems){
        if(this.cartItems[i].id === product.id){
          this.cartItems[i].qty++
          break;

        }else {
          this.cartItems.push({
            productID: product.isbn,
            productName: product.name, 
            price: product.price
          })
  
        }
      }
  
      this.cartTotal =0 
      this.cartItems.forEach(item => {
        this.cartTotal += (item.price)
  
      })
    } 
  }

}




