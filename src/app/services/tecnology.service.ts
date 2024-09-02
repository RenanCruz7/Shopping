import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class TecnologyService {

  constructor(private http: HttpClient) { }

  getTechnology(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products-tecnology');
  }
}
