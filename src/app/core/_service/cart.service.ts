import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/_model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productos: Product[]=[];
  private cart= new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();
  constructor() { }

  addCart(product: Product){
    this.productos = [...this.productos, product];
    this.cart.next(this.productos);
  }
}
