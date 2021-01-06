import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import { BuyItemComponent } from "./components/shopping-cart/buy-item/buy-item.component";
import { OrderComponent } from "./components/shopping-cart/buy-item/order/order.component";

const routes: Routes = [
  { path:'', redirectTo: '/shop', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'order', component: OrderComponent },
  { path:'buy-item/', component: ShoppingCartComponent },
  { path:'buy-item', component: BuyItemComponent },
  { path:'shop', component: ShoppingCartComponent },
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
