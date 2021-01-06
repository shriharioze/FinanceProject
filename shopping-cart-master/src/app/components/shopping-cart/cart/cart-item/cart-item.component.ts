import { Component, OnInit,Input} from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import {MessengerService} from 'src/app/service/messenger.service';
import {CartService} from 'src/app/service/cart.service';
import { Product } from 'src/app/model/product';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() productItem:Product
  @Input() cartItem:CartItem
  constructor(private msg:MessengerService,private cartservice :CartService) { }

  ngOnInit(): void {
  }

  handleRemoveFromCart(){
    this.cartservice.removeFromCart(this.cartItem.id);
  }


}
