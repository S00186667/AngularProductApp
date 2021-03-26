import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'model/product';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  @Input() productItem: IProduct

  wishList: any[] = []

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {

    this.loadWishlist(); 
  }


  loadWishlist(){
    this.wishlistService.getWishList().subscribe(productIds => {
      this.wishList = productIds
      console.log(productIds)
    })
      
  }

}
