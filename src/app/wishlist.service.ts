import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'; 

import {wishlistURL} from 'src/app/config/api'; 

import {map} from 'rxjs/operators'; 

const APIURL = ""

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }


  addToWishList(productId){

    return this.http.post(wishlistURL, {id: productId})

  }

  getWishList(){
//map and pipe combo for turning the list of products into an array
    return this.http.get(wishlistURL).pipe(
      map((result: any[]) => {

        let productIds =[]

        result.forEach(item => productIds.push(item.id))


        return productIds; 

      })
    )

  }

  removeFromWishlist(productId){
    return this.http.delete(wishlistURL + '/' + productId);

  }
}
