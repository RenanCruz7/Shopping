import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product): void {
    const currentCart = this.cartSubject.value;
    this.cartSubject.next([...currentCart, product]);
  }
  removeFromCart(product: Product): void {
    const currentItems = this.cartSubject.value;
    const updatedItems = currentItems.filter(item => item.id !== product.id);
    this.cartSubject.next(updatedItems);
  }
}