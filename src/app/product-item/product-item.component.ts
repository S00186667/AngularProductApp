import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import {IProduct} from 'model/product'; 

import {MessengerService} from 'src/app/messenger.service'; 
import { AppState } from '../app.state';
import { WishlistService } from '../wishlist.service';


import * as WishlistActions from 'src/app/actions/wishlist.actions'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: IProduct

  @Input() addedToWishList: boolean; 


  clearmsgs = ""; 

  
  constructor(private msg: MessengerService,
    private wishlistService: WishlistService, private store: Store<AppState> ) { }

  ngOnInit(): void {
  }


  addWishlist(name,Price){
    this.store.dispatch(new WishlistActions.AddWishlist({name: name, Price: Price}))
    this.addedToWishList = true

  }


  handleAddToCart(){
    this.msg.sendMsg(this.productItem)
    this.addedToWishList = true
  }

  handleRemoveCart(){
    this.msg.sendMsg(this.clearmsgs); 
    this.addedToWishList = false; 
  }

 
  /*handleAddToWishList(){

    this.wishlistService.addToWishList(this.productItem.isbn).subscribe(()=>{
      this.addedToWishList = true; 

    })

  }

  handleRemoveFromWishList(){

    this.wishlistService.removeFromWishlist(this.productItem.isbn).subscribe(()=> {
      this.addedToWishList = false; 
    })

  }*/

}
