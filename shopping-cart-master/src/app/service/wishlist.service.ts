import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {wishListUrl} from 'src/app/Config/api'

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  getWishlist(){
          return this.http.get(wishListUrl).pipe(
            map((result:any[])=>{
              let productIds =[]
                result.forEach(item=>productIds.push(item.id))
              return productIds;
            })
          )
  }

  addToWishList(productId){
    return this.http.post(wishListUrl,{id:productId})

  }

  removeFromWishList(productId){
return this.http.delete(wishListUrl + '/'+productId);

  }
}
