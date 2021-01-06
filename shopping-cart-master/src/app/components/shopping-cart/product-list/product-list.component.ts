import { Component, OnInit } from '@angular/core';

import {ProductService} from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { WishlistService } from 'src/app/service/wishlist.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    productList:Product[] = []
    wishlist :number[]=[]

  constructor(private productService : ProductService,private wishlistService:WishlistService) { 
  }

  ngOnInit()
  {
      this.loadProducts();
      this.loadWishlist();
    
  }

  loadProducts(){
    this.productService.getProduct().subscribe((product)=>
    {
        this.productList = product;
        
    });
  }

  loadWishlist(){
    this.wishlistService.getWishlist().subscribe(productIds => {
      this.wishlist=productIds
    })
  }

}
