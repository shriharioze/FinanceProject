import { Component, OnInit ,Input} from '@angular/core';

import {MessengerService} from 'src/app/service/messenger.service'

import { Product } from 'src/app/model/product';

import { CartService } from 'src/app/service/cart.service';
import { CartItem } from 'src/app/model/cart-item';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartItems = [];

  cartTotal = 0

  constructor(private msg: MessengerService 
    , private cartService: CartService) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
    
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  
  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

 
}
