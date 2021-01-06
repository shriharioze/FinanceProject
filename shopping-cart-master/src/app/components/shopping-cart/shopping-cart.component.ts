import { Component, OnInit } from '@angular/core'
// import {CartService} from 'src/app/service/cart.service'
// import { CartItem } from 'src/app/model/cart-item';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent  {

  loginbtn:boolean;
  logoutbtn:boolean;

  constructor(private dataService: ApiService) {

  if(this.dataService.isLoggedIn())
  {
  console.log("loggedin");
  this.loginbtn=false;
  this.logoutbtn=true
  }
  else{
  this.loginbtn=true;
  this.logoutbtn=false
  }

}
}
