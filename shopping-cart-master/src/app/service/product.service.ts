import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import {productUrl} from 'src/app/Config/api'


@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http:HttpClient) { }

      getProduct():Observable<Product[]>{
        return this.http.get<Product[]>(productUrl);
      }



}
