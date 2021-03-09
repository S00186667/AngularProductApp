import { Component, OnInit, Input } from '@angular/core';

import {IProduct} from 'model/product'; 

import {MessengerService} from 'src/app/messenger.service'; 
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: IProduct

  @Input() addedToWishList: boolean; 

  
  constructor(private msg: MessengerService,
    private wishlistService: WishlistService) { }

  ngOnInit(): void {
  }


  handleAddToCart(){
    this.msg.sendMsg(this.productItem)
  }


  handleAddToWishList(){

    this.wishlistService.addToWishList(this.productItem.isbn).subscribe(()=>{
      this.addedToWishList = true; 

    })

  }

  handleRemoveFromWishList(){

    this.wishlistService.removeFromWishlist(this.productItem.isbn).subscribe(()=> {
      this.addedToWishList = false; 
    })

  }

}
