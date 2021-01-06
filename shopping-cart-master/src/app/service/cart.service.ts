import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { CartItem } from '../model/cart-item';
import {Observable} from  'rxjs'
import { map } from 'rxjs/operators';
import { cartUrl } from '../Config/api';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product));
          }
        }

        return cartItems;
      })
    );
  }


  addProductToCart(product:Product):Observable<any>
  {
        return this.http.post(cartUrl,{product});
  }

  removeFromCart(id)
  {
    return this.http.delete(cartUrl + '/'+id);
  }

}
