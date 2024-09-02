import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/types';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
  private promotionsSubject = new BehaviorSubject<Product[]>([]);
  promotions$ = this.promotionsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getPromotions(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products-promotions').pipe(
      tap((promotions: Product[]) => this.promotionsSubject.next(promotions))
    );
  }

  refreshPromotions(): void {
    this.getPromotions().subscribe();
  }
}
