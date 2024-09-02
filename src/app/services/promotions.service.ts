import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  constructor(private http: HttpClient) { }

  getPromotions(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products-promotions');
  }
}
