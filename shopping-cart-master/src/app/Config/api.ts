import {environment} from 'src/environments/environment'

export const baseurl =environment.production ? 'https://api.shoppingcart.com' :'http://localhost:3000'
export const productUrl = baseurl + '/product'
export const cartUrl = baseurl + '/cart'
export const wishListUrl =  baseurl + '/wishlist'
