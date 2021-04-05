import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { wishlist } from 'model/wishlist.model';
import { AppState } from 'src/app/app.state';

import * as WishlistActions from 'src/app/actions/wishlist.actions'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


wishlists: Observable<wishlist[]>; 

  cartItems =[]; 

  cartTotal =0; 


  //private msg: MessengerService,

  constructor( private store: Store<AppState>) {

    this.wishlists = store.select('WishList')


   }

   delWishlist(index){
     this.store.dispatch(new WishlistActions.RemoveWishlist(index))
   }

  ngOnInit(): void {



    //this.msg.getMsg().subscribe((product: IProduct) => {
     // console.log(product); 

  //   this.addProductToCart(product)
   
  //  })
    
  }

 /* addProductToCart(product: IProduct){

    if(this.cartItems.length === 0){
      this.cartItems.push({
        productID: product.isbn,
        productName: product.name, 
        price: product.price
      })
    }else{

      for(let i in this.cartItems){
        if(this.cartItems[i].id === product._id){
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
  }*/

}




