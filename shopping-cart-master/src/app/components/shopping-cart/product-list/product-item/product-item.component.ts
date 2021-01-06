import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import {MessengerService} from 'src/app/service/messenger.service'
import {CartService} from 'src/app/service/cart.service'
import { WishlistService } from 'src/app/service/wishlist.service';
import { CartItem } from 'src/app/model/cart-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

   @Input() productItem:Product;
   @Input() addedToWishlist : boolean;
   @Input() cartItem :CartItem;
  
  constructor(private msg:MessengerService,
    private cartservice :CartService,
    private wishlistService :WishlistService) { }

  ngOnInit(): void {
  }


  handleAddToCart(){
    this.cartservice.addProductToCart(this.productItem).subscribe(()=>{
      this.msg.sendMsg(this.productItem)
    })
   
  }



  handleAddToWishlist()
  {
      this.wishlistService.addToWishList(this.productItem.id).subscribe(()=>{
          this.addedToWishlist=true;
      })
  }

    handleRemoveFromWishlist()
    {
        this.wishlistService.removeFromWishList(this.productItem.id).subscribe(()=>{
          this.addedToWishlist=false;
        })
    }

}
